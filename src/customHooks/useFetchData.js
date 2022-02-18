import { useState, useEffect } from 'react';
import { base } from 'airtable/base';
import { useLocalStorage } from 'customHooks';

const useFetchData = (pageSize, sort, table) => {
  const [items, setItems] = useLocalStorage('items', '');

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

// const useFetchData = endpoint => {
//   const [data, setData] = useState({
//     status: 'loading',
//     data: null,
//   });

//   const getData = async () => {
//     if (!endpoint) {
//       setData({ status: 'error' });
//     } else {
//       try {
//         const { records } = await api.get(endpoint);

//         setData({
//           status: 'success',
//           data: records,
//           o
//         });
//         console.log(data);
//       } catch (error) {
//         setData({
//           status: 'error',
//         });
//       }
//     }
//   };

//   return {
//     data,
//     setData,
//     getData,
//   };
// };

// export default useFetchData;
