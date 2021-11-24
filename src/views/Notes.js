import { useState, useEffect } from 'react';
import {connect }from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card-test';
import { fetchNotes } from 'api/notes';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    const data = await fetchNotes();
    setNotes(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GridTemplate pageType="notes">
      {notes &&
        notes.map(note => (
          <Card
            cardType="notes"
            id={note.id}
            title={note.title}
            date={note.date}
            content={note.content}
            imageUrl={note.imageUrl}
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

const mapStateToProps = state => {
  console.log(state);
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
