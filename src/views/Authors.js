import { useState, useEffect } from 'react';

import GridTemplate from 'templates/GridTemplate';
import CardSmall from 'components/molecules/Card/CardSmall';
import useFetchData from 'actions/useFetchData';

const Authors = () => {
  const table = 'authors';
  const pageSize = 12;
  const sort = [{ field: 'lastName' }];
  const { items: authors } = useFetchData(pageSize, sort, table);
  console.log('data from Authors:', authors);

  return (
    <GridTemplate pageType="authors">
      {authors && authors.map(author => <CardSmall author={author} key={author.id} />)}
    </GridTemplate>
  );
};

export default Authors;
