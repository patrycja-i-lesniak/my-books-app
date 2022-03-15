import GridTemplate from 'templates/GridTemplate';
import GetData from 'GetData';
import RotaryBox from 'components/molecules/RotaryBox/RotaryBox';
import QuotesBox from 'components/organisms/QuotesBox';
import {Container} from 'components/atoms/Container';
import Header from 'components/atoms/Header/Header';

const Home = () => {
  const data = {
    table: 'books',
    pageSize: 5,
    sort: [{ field: 'title', direction: 'asc' }],
    filterByFormula: '',
  };

  return (
    <>
      <Container>
        <QuotesBox />
        <RotaryBox />
        <Header details>Last added books</Header> 
        <GridTemplate pageType="home">
        

        <GetData data={data} />
      </GridTemplate>
      </Container>
     
    </>
  );
};

export default Home;
