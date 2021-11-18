import GridTemplate from 'templates/GridTemplate';
import LastAdded from 'components/molecules/LastAddedItems';

const Home = () => (
  <>
    <GridTemplate pageType="home">
      <LastAdded/>
    </GridTemplate>
  </>
);

export default Home;
