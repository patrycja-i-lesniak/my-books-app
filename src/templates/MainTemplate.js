import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import plusIcon from 'assets/icons/plus.svg';
import PageContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar';
import { GlobalStyle, StyledBackdrop } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';

import GetCurrentPage from 'helpers/GetCurrentPage';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;

const MainTemplate = ({ children}) => {
  const [isNewItemBarVisible, setNewItemBarVisible] = useState(false);

  const pageType = GetCurrentPage();

  const toggleNewItemBar = () => {
    setNewItemBarVisible(!isNewItemBarVisible);
  };

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {children}
          <NewItemBar isVisible={isNewItemBarVisible} toggleNewItemBar={toggleNewItemBar} />
          {pageType === 'home' || pageType === 'quotes' || isNewItemBarVisible ? null : (
            <StyledButtonIcon icon={plusIcon} onClick={toggleNewItemBar} />
          )}
          {isNewItemBarVisible && <StyledBackdrop onClick={toggleNewItemBar} />}
        </ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
