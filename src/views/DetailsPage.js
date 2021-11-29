import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import api from 'api';
import Loader from 'components/atoms/Loader';
import Error from 'components/atoms/Error';
import CardBig from 'components/molecules/Card/Card-big';

const DetailsPage = () => {
  const [bookData, setBookData] = useState({
    status: 'loading',
    data: null,
  });
  const { id } = useParams();
  const endpoint = `/books/${id}`;

  const getBookData = async () => {
    try {
      const data = await api.get(endpoint);
      setBookData({ status: 'success', data });
      console.log(bookData.data);
    } catch (error) {
      setBookData({ status: 'error' });
    }
  };

  useEffect(() => {
    const delayGetData = setTimeout(getBookData, 3_000);
    return () => clearTimeout(delayGetData);
  }, []);

  return (
    <>
      <DetailsPageTemplate>
        {bookData.status === 'loading' ? (
          <Loader />
        ) : bookData.status === 'error' ? (
          <Error reloadButton />
        ) : (
          <>
            {bookData &&
              [bookData.data].map((book, index) => (
                <CardBig key={book.id} book={book} index={index} />
              ))}
          </>
        )}
      </DetailsPageTemplate>
    </>
  );
};

export default DetailsPage;
