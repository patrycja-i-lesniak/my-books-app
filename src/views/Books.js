import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { booksData } from 'assets/booksData';

const books = booksData;

const Books = () => (
  <GridTemplate pageType="books">
    {books.map(({ title, author, imageUrl, id }) => (
      <Card imageUrl={imageUrl} title={title} author={author} key={id} />
    ))}
  </GridTemplate>
);

export default Books;
