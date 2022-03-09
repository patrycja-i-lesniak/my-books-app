import React, { useState, useEffect } from 'react';
import { base } from 'airtable/base';

const useFetchData = data => {
  const [items, setItems] = useState({ status: 'loading', items: null });
  const { table, pageSize, sort, filterByFormula } = data;

  useEffect(() => {
    // let isBaseSubscribed = true;
    // if (isBaseSubscribed) {
    base(`${table}`)
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
    // }
    // return () => {
    //  isBaseSubscribed = false;
    // };
  }, [pageSize, sort, table, filterByFormula]);

  return {
    items,
  };
};

export default useFetchData;
