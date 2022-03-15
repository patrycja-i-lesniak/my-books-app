import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import Loader from 'components/atoms/Loader';
import LoaderSmall from 'components/atoms/LoaderSmall';
import Error from 'components/atoms/Error';
import { CardBig, CardSmall } from 'components/molecules/Card';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { useFetchDetailsData, useFetchData } from 'customHooks';
import { IoMdArrowDropleft } from 'react-icons/io';
import GetData from 'GetData';
import Header from 'components/atoms/Header/Header';
import { StyledGrid } from 'components/atoms/StyledGrid';

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const DetailsPage = ({ pageContext }) => {
  const history = useHistory();
  const { id } = useParams();
  const { itemData } = useFetchDetailsData(id);

  const authorsData = {
    table: 'books',
    pageSize: 20,
    sort: [{ field: 'title', direction: 'asc' }],
    filterByFormula: `( {lastName} = "${itemData.fields?.lastName}")`,
  };

  const seriesData = {
    table: 'books',
    pageSize: 30,
    sort: [{ field: 'date', direction: 'desc' }],
    filterByFormula: `( {series} = "${itemData.fields?.series}")`,
  };

  return (
    <DetailsPageTemplate>
      {itemData.status === 'loading' ? (
        <LoaderSmall />
      ) : itemData.status === 'error' ? (
        <Error reloadButton />
      ) : (
        <>
          <CardBig itemData={itemData} />
          {pageContext === 'books' ? (
            <Header details>All books in series - {itemData.fields?.series}</Header>
          ) : pageContext === 'authors' ? (
            <Header>All books by this author</Header>
          ) : null}
          <StyledGrid>
            {pageContext === 'authors' ? (
              <GetData data={authorsData} />
            ) : (
              <GetData data={seriesData} />
            )}
          </StyledGrid>
          <StyledButton
            onClick={() => {
              history.goBack();
            }}
          >
            <IoMdArrowDropleft /> Go Back
          </StyledButton>
        </>
      )}
    </DetailsPageTemplate>
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'books', 'quotes']),
};

export default withContext(DetailsPage);
