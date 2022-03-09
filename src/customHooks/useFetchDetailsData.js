import { useState, useEffect } from 'react';
import { base } from 'airtable/base';

const useFetchDetailsData = id => {
  const [itemData, setItemData] = useState({ status: 'loading', data: null });

  useEffect(() => {
    base('books').find(`${id}`, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      setItemData(record);
    });
  }, [id]);
  return {
    itemData
  };
};

export default useFetchDetailsData;

