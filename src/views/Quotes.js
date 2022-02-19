import { useState, useEffect } from 'react';

import GridTemplate from 'templates/GridTemplate';
import NewQuoteForm from 'components/molecules/NewQuoteForm';
import QuoteCard from 'components/molecules/Card/QuoteCard';
import Masonry from 'components/molecules/Masonry';
import { useFetchData } from 'customHooks';

const Quotes = () => {
  const table = 'quotes';
  const pageSize = 100;
  const sort = [{ field: 'author', direction: 'asc' }];
  const { items: quotes } = useFetchData(pageSize, sort, table);
  console.log('data from Quotes:', quotes);

  return (
      <GridTemplate pageType="quotes">
        <NewQuoteForm />
        <Masonry column={3}>
          {quotes && quotes.map(quote => <QuoteCard quote={quote} key={quote.id} />)}
        </Masonry>
      </GridTemplate>
  );
};

export default Quotes;
