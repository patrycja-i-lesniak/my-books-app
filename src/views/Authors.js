import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Authors = ({ authors }) => (
  <GridTemplate pageType="authors">
    {authors.map(({ author, imageUrl, id }) => (
      <Card id={id} cardType='authors' imageUrl={imageUrl} title={author} key={id} />
    ))}
  </GridTemplate>
);

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

Authors.defaultProps = {
  authors: [],
};

const mapStateToProps = (state) => {
  console.log(state);
  const { authors } = state;
  return { authors };
};

export default connect(mapStateToProps)(Authors);
