import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Home = ({books}) => (
  <>
    <GridTemplate pageType="home">
      {books.map(({ author, imageUrl, id }) => (
        <Card id={id} cardType="books" imageUrl={imageUrl} title={author} key={id} />
      ))}
    </GridTemplate>
  </>
);

Home.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => {
  console.log(state);
  const { books } = state;
  return { books };
};

export default connect(mapStateToProps)(Home);
