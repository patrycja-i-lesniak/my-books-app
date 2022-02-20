import GridTemplate from 'templates/GridTemplate';
import {GetBooksData} from 'GetData';

const Books = () => {
  const data = {
    table: 'books',
    pageSize: 50,
    sort: [{ field: 'title', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="books">
      <GetBooksData data={data} />
    </GridTemplate>
  );
};

export default Books;
