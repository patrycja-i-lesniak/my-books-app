import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { base } from 'airtable/base';
import Popup from 'components/molecules/Popup';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    base('books')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        if (isApiSubscribed) {
          setBooks(records);
          fetchNextPage();
          console.log(records);
        }
      });
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const handleDelete = id => {
    setPopup({
      show: true,
      id,
    });
    console.log('Open popup');
  };

  const handleDeleteTrue = books => {
    if (popup.show && popup.id) {
      const filteredBooks = books.filter(book => book.id !== popup.id);
      setBooks(filteredBooks);
      setPopup({
        show: false,
        id: null,
      });
      console.log('Delete item');
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
      {popup.show && (
        <Popup handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse} />
      )}
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
