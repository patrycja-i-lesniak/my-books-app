import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';
import LastAddedItems from 'components/molecules/LastAddedItems';

const Home = () => (
  <>
    <GridTemplate pageType="home">
      <LastAddedItems />
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

export default Home;
