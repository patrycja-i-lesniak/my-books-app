import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import PageContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { GlobalStyle } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';

import { useGetCurrentPage } from 'customHooks';

const MainTemplate = ({ children }) => {
  const pageType = useGetCurrentPage();

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
