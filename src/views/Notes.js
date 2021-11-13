import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({notes}) => (
  <GridTemplate pageType="notes">
    {notes.map(({ id, title, content, date }) => (
      <Card title={title} date={date} content={content} key={id} />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = (state) => {
  console.log(state);
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
