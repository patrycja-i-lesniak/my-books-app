import GridTemplate from 'templates/GridTemplate';
import GetData from 'GetData';

const Authors = () => {
  const data = {
    table: 'authors',
    pageSize: 100,
    sort: [{ field: 'lastName' }],
  };

  return (
    <GridTemplate pageType="authors">
      <GetData data={data} />
    </GridTemplate>
  );
};

export default Authors;
