// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from 'api/books';

const DetailsPage = () => {
  const [bookData, setBookData] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    const dbData = await fetchBookDetails(id);
    setBookData(dbData);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      {bookData && (
        <DetailsPageTemplate
          // pageType={pageType}
          title={bookData.title}
          firstName={bookData.firstName}
          latNsme={bookData.lastName}
          content={bookData.content}
          imageUrl={bookData.imageUrl}
          status={bookData.imageUrl}
          numberOfPages={bookData.numberOfPages}
          date={bookData.date}
          translation={bookData.translation}
          publishing={bookData.publishing}
          isbn={bookData.isbn}
          series={bookData.series}
          LClink={bookData.LClink}
        />
      )}
    </>
  );
};

export default DetailsPage;
