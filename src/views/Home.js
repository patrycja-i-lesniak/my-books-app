import GridTemplate from 'templates/GridTemplate';
import GetData from 'GetData';

const Home = () => {
  const data = {
    table: 'books',
    pageSize: 5,
    sort: [{ field: 'title', direction: 'asc' }],
    filterByFormula: '',
  };

  return (
    <>
      <GridTemplate pageType="home">
        <GetData data={data} />
      </GridTemplate>
    </>
  );
};

export default Home;
