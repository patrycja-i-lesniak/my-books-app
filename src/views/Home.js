import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';
import LastAddedBooks from 'components/molecules/LastAddedBooks';

const Home = () => (
  <>
    <GridTemplate pageType="home">
      <LastAddedBooks />
    </GridTemplate>
  </>
);

Home.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

Home.defaultProps = {
  pageContext: 'home',
};

export default Home;
