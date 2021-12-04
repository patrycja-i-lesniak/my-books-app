import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import Loader from 'components/atoms/Loader';
import Error from 'components/atoms/Error';
import CardBig from 'components/molecules/Card/Card-big';
import Button from 'components/atoms/Button/Button';
import useFetchDetailsData from 'actions/useFetchDetailsData';
import withContext from 'hoc/withContext';

const DetailsPage = ( pageContext) => {
  const endpoint = pageContext.location.pathname;
  console.log(pageContext);
  const { itemData } = useFetchDetailsData(endpoint);

 const history = useHistory();

  return (
    <>
      <DetailsPageTemplate>
        {itemData.status === 'loading' ? (
          <Loader />
        ) : itemData.status === 'error' ? (
          <Error reloadButton />
        ) : (
          <>
            {itemData &&
              [itemData.data].map((item, index) => (
                <CardBig key={item.id} item={item} index={index} endpoint={endpoint} />
              ))}

            <Button
              onClick={() => {
                history.goBack();
              }}
            >
              Back 
            </Button>
          </>
        )}
      </DetailsPageTemplate>
    </>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'books'])
}

export default withContext(DetailsPage);
