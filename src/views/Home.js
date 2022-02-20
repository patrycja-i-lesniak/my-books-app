import GridTemplate from 'templates/GridTemplate';
import {GetBooksData} from 'GetData';

const Home = () => {
  const data = {
    table: 'books',
    pageSize: 5,
    sort: [{ field: 'title', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="home">
      <GetBooksData data={data} />
    </GridTemplate>
  );
};

export default Home;
