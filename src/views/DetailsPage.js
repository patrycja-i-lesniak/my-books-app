import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import api from 'api';
import Loader from 'components/atoms/Loader';
import Error from 'components/atoms/Error';
import CardBig from 'components/molecules/Card/Card-big';
import Button from 'components/atoms/Button/Button';

const StyledButton = styled(Button)``;

const DetailsPage = () => {
  const [bookData, setBookData] = useState({
    status: 'loading',
    data: null,
  });
  const { id } = useParams();
  const endpoint = `/books/${id}`;
  const history = useHistory();

  const getBookData = async () => {
    try {
      const data = await api.get(endpoint);
      setBookData({ status: 'success', data });
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

            <StyledButton
              onClick={() => {
                history.push('/books');
              }}
            >
              Back to books
            </StyledButton>
          </>
        )}
      </DetailsPageTemplate>
    </>
  );
};

export default DetailsPage;
