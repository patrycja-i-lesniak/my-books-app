import { useState, useEffect } from 'react';
import CardSmall from 'components/molecules/Card/CardSmall';
import { base } from 'airtable/base';


const LastAddedBooks = () => {
const [books, setBooks] = useState([]);

useEffect(() => {
  base('books')
    .select({ view: 'Grid view', pageSize: 4, sort: [{ field: 'createdTime', direction: 'desc' }] })
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
    );
}, []);

return (
  <>
      {books &&
        books.map(book => (
          <CardSmall cardType="home" book={book} key={book.id} />
        ))}
  </>
);

};

export default LastAddedBooks;
