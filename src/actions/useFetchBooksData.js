import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { base } from 'airtable/base';


const useFetchBooksData = () => {
  const [books, setBooks] = useState({
    status: 'loading',
    data: null,
  });

  // const filterByFormula = '{lastName}="Miller"';
  // const sort =  [{ field: 'createdTime', direction: 'desc' }]

  const getData = useMemo(() => {
    return  ( 
  base('books')
      .select({
        view: 'Grid view',
        pageSize: 3,
        // sort,
        // filterByFormula,
      })
      .eachPage(
        records => {
          setBooks(records);
          console.log(records);
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        },
      )
      )
  }, []);

  useEffect(() => {
    const delayGetData = setTimeout(getData, 3_000);
    return () => clearTimeout(delayGetData);
  }, []);

  return {
    books,
    setBooks,
   
  };
};

export default useFetchBooksData;
