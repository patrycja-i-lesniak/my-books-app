import GridTemplate from 'templates/GridTemplate';
import NewQuoteForm from 'components/molecules/NewQuoteForm';

const Quotes = () => (
  <>
    <GridTemplate pageType="quotes">
      <NewQuoteForm />
    </GridTemplate>
  </>
);

export default Quotes;
