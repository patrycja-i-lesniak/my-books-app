import { useState, useEffect } from 'react';
import { base } from 'airtable/base';

const useFetchData = data => {
  const [items, setItems] = useState([]);
  const { table, pageSize, sort } = data.data;

  useEffect(() => {
    base(`${table}`)
      .select({ view: 'Grid view', pageSize: pageSize, sort: sort })
      .eachPage(
        (records, fetchNextPage) => {
          setItems(records);
          // fetchNextPage();
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        },
      );
  }, [pageSize, sort, table]);

  return {
    items,
    setItems,
  };
};

export default useFetchData;
