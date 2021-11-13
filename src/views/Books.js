/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Books = ({ books }) => (
  <GridTemplate pageType="books">
    {books.map(({ title, author, imageUrl, id }) => (
      <Card id={id} imageUrl={imageUrl} title={title} author={author} key={id} />
    ))}
  </GridTemplate>
);



Books.propTypes = {
  books: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  )
};

Books.defaultProps = {
  books: [],
};

const mapStateToProps = state => {
  console.log(state);
  const {books} = state;
  return {books};
  
};

export default connect(mapStateToProps)(Books);
