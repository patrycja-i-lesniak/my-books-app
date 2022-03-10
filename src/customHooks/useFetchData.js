import React, { useState, useEffect } from 'react';
import { base } from 'airtable/base';

const useFetchData = data => {
  const [items, setItems] = useState({ status: 'loading', items: {} });
  const { table, pageSize, sort, filterByFormula } = data;

  useEffect(() => {
    const getData = async () => {
      const records = await base(`${table}`)
        .select({
          view: 'Grid view',
          pageSize: pageSize,
          sort: sort,
          filterByFormula: filterByFormula,
        })
        .firstPage(function (err, records) {
          if (err) {
            console.error(err);
            return;
          }
          setItems(records);
        });
    };
    getData();
    return () => {
      setItems();
    };
  }, [pageSize, sort, table, filterByFormula]);

  return {
    items,
  };
};

export default useFetchData;
