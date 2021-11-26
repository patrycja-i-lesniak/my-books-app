import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { base } from 'airtable/base';
import ConfirmPopup from 'components/molecules/Popups/ConfirmPopup';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  useEffect(() => {
   
    base('books')
      .select({ view: 'Grid view'})
      .eachPage((records, fetchNextPage) => {
          setBooks(records);
          fetchNextPage();
          console.log(records);
      }, function (err) {
        if (err) {
          console.error(err);
          return;
        }
      });
  }, []);

  const handleDelete = id => {
    setPopup({
      show: true,
      id,
    });
    console.log('open popup');
  };

  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      const filteredBooks = (books) => books.filter(book => book.id !== popup.id);
      setBooks(filteredBooks);
      setPopup({
        show: false,
        id: null,
      });
      console.log('delete item & close popup');
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
    console.log('Close popup');
  };

  return (
    <GridTemplate pageType="books">
      {books &&
        books.map(book => (
          <Card
            cardType="books"
            book={book}
            id={book.id}
            title={book.title}
            firstName={book.firstName}
            lastName={book.lastName}
            imageUrl={book.imageUrl}
            date={book.date}
            content={books.content}
            key={book.id}
            handleDelete={handleDelete}
          />
        ))}
      {popup.show && <ConfirmPopup handleDeleteFalse={handleDeleteFalse} handleDeleteTrue={handleDeleteTrue}/>}
    </GridTemplate>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

Books.defaultProps = {
  books: [],
};

export default Books;
