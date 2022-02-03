import { useState, useEffect } from 'react';

import GridTemplate from 'templates/GridTemplate';
import NewQuoteForm from 'components/molecules/NewQuoteForm';
import QuoteCard from 'components/molecules/Card/QuoteCard';
import Masonry from 'components/molecules/Masonry';
import { base } from 'airtable/base';

const Quotes = () => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    base('quotes')
      .select({ view: 'Grid view', pageSize: 100 })
      .eachPage(
        (records, fetchNextPage) => {
          setQuotes(records);
          fetchNextPage();
          console.log('quotes:', records);
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        },
      );
  }, []);

  return (
    <GridTemplate pageType="quotes">
      <NewQuoteForm />
        <Masonry column3={3}>
          {quotes && quotes.map(quote => <QuoteCard quote={quote} key={quote.id} />)}
        </Masonry>
    </GridTemplate>
  );
};

export default Quotes;
