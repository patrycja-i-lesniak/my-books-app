import { useState, useEffect } from 'react';
import { base } from 'airtable/base';


const useFetchData = (pageSize, sort, table) => {
  const [items, setItems] = useState([]);

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
  }, []);

  return {
    items,
    setItems,
  };
};

export default useFetchData;
