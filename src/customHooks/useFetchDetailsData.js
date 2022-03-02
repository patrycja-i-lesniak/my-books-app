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
      console.log('Retrieved', record);
    });
  }, [id]);
  return {
    itemData,
    setItemData,
  };
};

export default useFetchDetailsData;

// import { useState, useEffect } from 'react';
// import { base } from 'airtable/base';
// import { useGetCurrentPage } from 'customHooks';

// const useFetchDetailsData1 = () => {
//   const [item, setItem] = useState();

//   const page = useGetCurrentPage();
//   const endpoit = page.location.pathname;
//   console.log('endpoint:', endpoint);
//   const table = () => {
//     if (endpoint === 'authors') {
//       return 'books';
//     }
//     if (endpoint === 'books') {
//       return 'authors';
//     } else {
//       console.log('Hello!');
//     }
//   };

//   // useEffect(() => {
//   //     base(`${table}`).find('recEGlb6fFv9fItYx', function (err, record) {
//   //       if (err) {
//   //         console.error(err);
//   //         return;
//   //       }
//   //       console.log('Retrieved', record.id);
//   //     });
//   // })
// };

// export default useFetchDetailsData1;// import { useState, useEffect } from 'react';
// import { base } from 'airtable/base';
// import { useGetCurrentPage } from 'customHooks';

// const useFetchDetailsData1 = () => {
//   const [item, setItem] = useState();

//   const page = useGetCurrentPage();
//   const endpoit = page.location.pathname;
//   console.log('endpoint:', endpoint);
//   const table = () => {
//     if (endpoint === 'authors') {
//       return 'books';
//     }
//     if (endpoint === 'books') {
//       return 'authors';
//     } else {
//       console.log('Hello!');
//     }
//   };

//   // useEffect(() => {
//   //     base(`${table}`).find('recEGlb6fFv9fItYx', function (err, record) {
//   //       if (err) {
//   //         console.error(err);
//   //         return;
//   //       }
//   //       console.log('Retrieved', record.id);
//   //     });
//   // })
// };

// export default useFetchDetailsData1;

// import { useState, useEffect } from 'react';
// import api from 'api';

// const useFetchDetailsData = endpoint => {
//   const [itemData, setItemData] = useState({
//     status: 'loading',
//     data: null,
//   });

//   const getItemData = async () => {
//     try {
//       const data = await api.get(endpoint);
//       setItemData({
//         status: 'success',
//         data,
//       });
//     } catch (error) {
//       setItemData({
//         status: 'error',
//       });
//     }
//   };

//   useEffect(() => {
//     const delayGetData = setTimeout(getItemData, 3_000);
//     return () => clearTimeout(delayGetData);
//   }, [getItemData]);

//   return {
//     itemData,
//     setItemData,
//   };
// };

// export default useFetchDetailsData;
