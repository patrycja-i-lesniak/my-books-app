import { useState, useEffect } from 'react';

import GridTemplate from 'templates/GridTemplate';
import CardSmall from 'components/molecules/Card/CardSmall';
import {useFetchData} from 'customHooks';

const Books = () => {
  const table = 'books';
  const pageSize = 50;
  const sort = [{ field: 'title', direction: 'asc' }];
  const { items: books } = useFetchData(pageSize, sort, table);

  return (
    <GridTemplate pageType="books">
      {books &&
        books.map((book, index) => (
          <>
            <CardSmall key={book.id} book={book} index={index} />
          </>
        ))}
    </GridTemplate>
  );
};

export default Books;
