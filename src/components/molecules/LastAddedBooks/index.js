import { useState, useEffect } from 'react';
import CardSmall from 'components/molecules/Card/CardSmall';
import { base } from 'airtable/base';
import withContext from 'hoc/withContext';
// import { useParams } from 'react-router-dom';


const LastAddedBooks = () => {
const [books, setBooks] = useState([]);
// const params = useParams();
// console.log(params);
// const filterByFormula = '{lastName}="Miller"';

useEffect(() => {

  base('books')
    .select({
      view: 'Grid view',
      pageSize: 5,
      sort:[{ field: 'createdTime', direction: 'desc' }] ,
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
    );
}, []);

return (
  <>
      {books &&
        books.map(book => (
          <CardSmall cardType='home' book={book} key={book.id} />
        ))}
  </>
);

};

export default withContext(LastAddedBooks);
