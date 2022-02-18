import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import CardSmall from 'components/molecules/Card/CardSmall';
import useFetchData from 'actions/useFetchData';

const Authors = () => {
  const pageSize = 12;
  const sort = [{ field: 'lastName' }];

  const { items: authors } = useFetchData(pageSize, sort);

  console.log('data from Authors:', authors);

  return (
    <GridTemplate pageType="authors">
      {authors && authors.map(author => <CardSmall author={author} key={author.id} />)}
    </GridTemplate>
  );
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

Authors.defaultProps = {
  authors: [],
};

export default Authors;
