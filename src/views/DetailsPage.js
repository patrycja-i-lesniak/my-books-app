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

const DetailsPage = pageContext => {
  const { id } = useParams();
  const { itemData } = useFetchDetailsData(id);
  const history = useHistory();

  // const {lastName} = itemData.fields;

  const data = {
    table: 'books',
    pageSize: 100,
    sort: [{ field: 'title', direction: 'asc' }],
    filterByFormula: '',
    // '({lastName} = "${lastName}")',
  };
  // const { items } = useFetchData(data);

  //"${lastName}"
  // console.log(lastName)
  // const series  = itemData.series;

  // const dataBook = {
  //   table: 'books',
  //   pageSize: 100,
  //   sort: [{ field: 'title', direction: 'asc' }],
  //   flterByFormula: `({series} = "${series}")`,
  // };

  // useEffect(()=> {
  //  const lastName = 'du Maurier';
  //   const filteredBooks = items ? items.filter(item => item.fields.lastName === lastName) : [];

  //   return () => { filteredBooks};
  // }, [items]);

  return (
    <DetailsPageTemplate>
      {itemData.status === 'loading' ? (
        <LoaderSmall />
      ) : itemData.status === 'error' ? (
        <Error reloadButton />
      ) : (
        <>
          <CardBig itemData={itemData} />
          {pageContext.pageContext === 'books' ? (
            <Header>Other books in this series</Header>
          ) : pageContext.pageContext === 'authors' ? (
            <Header>All books by this author</Header>
          ) : null}
          <p>Tu będzie przefiltrowana lista książek</p>
          <StyledGrid>
            {/* <FilteredBooks/> */}
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
