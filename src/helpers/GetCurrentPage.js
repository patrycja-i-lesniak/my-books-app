import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const GetCurrentPage = () => {
  const [pageType, setPageType] = useState();
  const location = useLocation();

  const setCurrentPage = () => {
    const pageTypes = ['home', 'books', 'authors', 'notes', 'quotes'];

    const [currentPage] = pageTypes.filter(page => location.pathname.includes(page));
    if (pageType !== currentPage) {
      setPageType(currentPage);
    }
    console.log('current page from GetCurrentPage:', currentPage);
  };

  useEffect(() => {
    setCurrentPage();
  });

  return pageType
};

export default GetCurrentPage;
