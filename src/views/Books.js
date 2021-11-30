import { useState, useEffect } from 'react';
import GridTemplate from 'templates/GridTemplate';
import CardSmall from 'components/molecules/Card/CardSmall';
import { base } from 'airtable/base';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    base('books')
      .select({ view: 'Grid view' })
      .eachPage(
        (records, fetchNextPage) => {
          setBooks(records);
          fetchNextPage();
          console.log(records);
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        },
      );
  }, []);

  return (
    <GridTemplate pageType="books">
      {books &&
        books.map(book => (
          <>
            <CardSmall id={book.id} key={book.id} book={book} cardType="books" />
          </>
        ))}
    </GridTemplate>
  );
};

export default Books;
