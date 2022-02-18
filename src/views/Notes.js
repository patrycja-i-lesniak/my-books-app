import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import CardSmall from 'components/molecules/Card/CardSmall';
import useFetchData from 'actions/useFetchData';

const Notes = () => {
  const pageSize = 6;
  const sort = [{ field: 'date', direction: 'asc' }];
  const { items: notes } = useFetchData(pageSize, sort);

  console.log('data from Notes:', notes);

  return (
    <GridTemplate pageType="notes">
      {notes && notes.map(note => <CardSmall note={note} key={note.id} />)}
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
