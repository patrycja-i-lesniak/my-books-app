import GridTemplate from 'templates/GridTemplate';
import GetData  from 'GetData';

const Books = () => {
  const data = {
    table: 'books',
    pageSize: 100,
    sort: [{ field: 'title', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="books">
      <GetData data={data} />
    </GridTemplate>
  );
};

export default Books;
