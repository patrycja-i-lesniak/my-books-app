import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const useGetCurrentPage = () => {
  const [pageType, setPageType] = useState();
  const { pathname } = useLocation();

  const setCurrentPage = () => {
    const pageTypes = ['home', 'books', 'authors', 'notes', 'quotes'];

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    if (pageType !== currentPage) {
      setPageType(currentPage);
    }
  };

  useEffect(() => {
    setCurrentPage();
  });

  return pageType;
};

export default useGetCurrentPage;
