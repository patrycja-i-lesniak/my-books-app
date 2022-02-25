import GridTemplate from 'templates/GridTemplate';
import GetData  from 'GetData';

const Notes = () => {
  const data = {
    table: 'notes',
    pageSize: 6,
    sort: [{ field: 'date', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="notes">
      <GetData data={data} />
    </GridTemplate>
  );
};

export default Notes;
