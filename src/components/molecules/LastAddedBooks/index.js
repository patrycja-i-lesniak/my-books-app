import { useState, useEffect } from 'react';

import CardSmall from 'components/molecules/Card/CardSmall';
import {useFetchData} from 'customHooks';

const LastAddedBooks = () => {
  const table = 'books';
  const pageSize = 5;
  const sort = [{ field: 'createdTime', direction: 'desc' }];
  const { items: books } = useFetchData(pageSize, sort, table);
  console.log('data from LastAddedBooks:', books);

  return <>{books && books.map(book => <CardSmall book={book} key={book.id} />)}</>;
};

export default LastAddedBooks;
