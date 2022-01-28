import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import CardSmall from 'components/molecules/Card/CardSmall';
import { base } from 'airtable/base';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    base('notes')
      .select({ view: 'Grid view', pageSize: 6, sort: [{ field: 'title' }] })
      .eachPage(
        (records, fetchNextPage) => {
          setNotes(records);
          fetchNextPage();
          console.log(records);
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        },
      );
  }, []);

  return (
    <GridTemplate pageType="notes">
      {notes &&
        notes.map(note => (
          <CardSmall
            cardType="notes"
            note={note}
            id={note.id}
            key={note.id}
          />
        ))}
    </GridTemplate>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
};

Notes.defaultProps = {
  date: '',
  imageUrl: '',
};


export default Notes;
