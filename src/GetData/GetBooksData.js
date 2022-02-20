import CardSmall from 'components/molecules/Card/CardSmall';
import { useFetchData } from 'customHooks';

const GetBooksData = data => {
  const { items: books } = useFetchData(data);

  return <>{books && books.map(book => <CardSmall book={book} key={book.id} />)}</>;
};

export default GetBooksData;
