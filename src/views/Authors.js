import GridTemplate from 'templates/GridTemplate';
import { GetAuthorsData } from 'GetData';

const Authors = () => {
  const data = {
    table: 'authors',
    pageSize: 12,
    sort: [{ field: 'lastName' }],
  };

  return (
    <GridTemplate pageType="authors">
      <GetAuthorsData data={data} />
    </GridTemplate>
  );
};

export default Authors;
