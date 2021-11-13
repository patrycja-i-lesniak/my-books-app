import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Authors = ({authors}) => (
  <GridTemplate pageType="authors">
    {authors.map(({ name, imageUrl, id }) => (
      <Card imageUrl={imageUrl} title={name} key={id} />
    ))}
  </GridTemplate>
);

Authors.propTypes = {
  authors: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
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
