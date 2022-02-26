import React, { useState, useEffect, Children } from 'react';

import GridTemplate from 'templates/GridTemplate';
import { useFetchData } from 'customHooks';
import GetData from 'GetData';

const Quotes = () => {
  const data = {
    table: 'quotes',
    pageSize: 100,
    sort: [{ field: 'author', direction: 'asc' }],
  };

  return (
    <GridTemplate pageType="quotes">
      <GetData data={data} />
    </GridTemplate>
  );
};

export default Quotes;
