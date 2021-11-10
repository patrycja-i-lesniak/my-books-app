import GridTemplate from 'templates/GridTemplate';
import RotaryBox from 'components/molecules/RotaryBox/RotaryBox';
import LastAddedItems from 'components/molecules/LastAddedItems';


const Home = () => (
  <>
    <GridTemplate pageType="home">
      <RotaryBox />
      <LastAddedItems/>
    </GridTemplate>
  </>
);

export default Home;
