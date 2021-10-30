import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { notesData } from 'assets/booksData';

const notes = notesData;

const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, id, date }) => (
      <Card title={title} date={date} content={content} key={id} />
    ))}
  </GridTemplate>
);
export default Notes;
