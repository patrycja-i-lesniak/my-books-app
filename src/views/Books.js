import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchBooks } from 'api/books';

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const data = await fetchBooks();
    console.log(data);
    setBooks(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GridTemplate pageType="books">
      {books &&
        books.map(book => (
          <Card
            cardType="books"
            id={book.id}
            title={book.title}
            author={book.author}
            imageUrl={book.imageUrl}
            key={book.id}
          />
        ))}
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
