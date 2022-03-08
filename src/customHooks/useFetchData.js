import React, { useState, useEffect } from 'react';
import { base } from 'airtable/base';

const useFetchData = data => {
  const [items, setItems] = useState([]);
  const { table, pageSize, sort, filterByFormula } = data;

  useEffect(() => {
    base(`${table}`)
      .select({
        view: 'Grid view',
        pageSize: pageSize,
        sort: sort,
        filterByFormula: filterByFormula,
      })
      // .eachPage(
      //   (records, fetchNextPage) => {
      //     setItems(records);
      //     // fetchNextPage();
      //   },
      //   function (err) {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //   },
      // );
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setItems(records);
        console.log(records);
        // records.forEach(function (record) {
        //   {
        //     console.log(record.get('lastName'));
        //   }
        // });
      });
    return () => {
      base;
    };
  }, [pageSize, sort, table, filterByFormula]);

  return {
    items,
    setItems,
  };
};

export default useFetchData;
