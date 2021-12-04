import { useState, useEffect } from 'react';
import api from 'api';

const useFetchDetailsData = endpoint => {
  const [itemData, setItemData] = useState({
    status: 'loading',
    data: null,
  });

  const getItemData = async () => {
   
      try {
        const data = await api.get(endpoint);
        setItemData({
          status: 'success',
          data,
        });
        
      } catch (error) {
        setItemData({
          status: 'error',
        });
      }
    }

  useEffect(() => {
    const delayGetData = setTimeout(getItemData, 3_000);
    return () => clearTimeout(delayGetData);
  }, []);

  return {
    itemData, 
    setItemData
  };
};

export default useFetchDetailsData;
