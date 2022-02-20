import CardSmall from 'components/molecules/Card/CardSmall';
import { useFetchData } from 'customHooks';

const GetAuthorsData = data => {
  const { items: authors } = useFetchData(data);

  return <>{authors && authors.map(author => <CardSmall author={author} key={author.id} />)}</>;
};

export default GetAuthorsData;
