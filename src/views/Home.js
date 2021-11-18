import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({books}) => (
  <>
    <GridTemplate pageType="home">
      {books.map(({ author, imageUrl, id }) => (
        <Card id={id} cardType="books" imageUrl={imageUrl} title={author} key={id} />
      ))}
    </GridTemplate>
  </>
);

Home.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

Home.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => {
  console.log(state);
  const { books } = state;
  return { books };
};

export default connect(mapStateToProps)(Home);
