import { useState, useEffect } from 'react';

import GridTemplate from 'templates/GridTemplate';
import NewQuoteForm from 'components/molecules/NewQuoteForm';
import QuoteCard from 'components/molecules/Card/QuoteCard';
import Masonry from 'components/molecules/Masonry';
import { useFetchData } from 'customHooks';
import { GetAllData } from 'GetData';

const Quotes = () => {
  const data = {
    table: 'quotes',
    pageSize: 100,
    sort: [{ field: 'author', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="quotes">
      <NewQuoteForm />
      {/* <Masonry column={3}>
        {quotes && quotes.map(quote => <QuoteCard quote={quote} key={quote.id} />)}
      </Masonry> */}
      <GetAllData data={data} />
    </GridTemplate>
  );
};

export default Quotes;
