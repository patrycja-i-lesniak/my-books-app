import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ id, title, imageUrl, content, date }) => (
      <Card id={id} title={title} imageUrl={imageUrl} cardType='notes' date={date} content={content} key={id} />
    ))}
  </GridTemplate>
);

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

const mapStateToProps = (state) => {
  console.log(state);
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
