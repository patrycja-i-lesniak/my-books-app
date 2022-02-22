import GridTemplate from 'templates/GridTemplate';
import { GetAllData } from 'GetData';

const Authors = () => {
  const data = {
    table: 'authors',
    pageSize: 12,
    sort: [{ field: 'lastName' }],
  };

  return (
    <GridTemplate pageType="authors">
      <GetAllData data={data} />
    </GridTemplate>
  );
};

export default Authors;
