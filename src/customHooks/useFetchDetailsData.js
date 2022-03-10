import { useState, useEffect } from 'react';
import { base } from 'airtable/base';

const useFetchDetailsData = id => {
  const [itemData, setItemData] = useState({ status: 'loading', data: null });

  useEffect(() => {
    const getItemById = async id => {
      const record = await base('books').find(`${id}`, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        setItemData(record);
      });
    };
    getItemById(id);
    return () => {
      setItemData();
    };
  }, [id]);

  return {
    itemData,
  };
};

export default useFetchDetailsData;
