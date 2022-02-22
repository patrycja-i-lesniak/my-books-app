import GridTemplate from 'templates/GridTemplate';
import { GetAllData } from 'GetData';

const Notes = () => {
  const data = {
    table: 'notes',
    pageSize: 6,
    sort: [{ field: 'date', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="notes">
      <GetAllData data={data} />
    </GridTemplate>
  );
};

export default Notes;
