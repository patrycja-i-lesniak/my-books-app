import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import plusIcon from 'assets/icons/plus.svg';
import PageContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemSlider from 'components/organisms/Sliders/NewItemSlider';
import { GlobalStyle, StyledBackdrop } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';

import { useGetCurrentPage } from 'customHooks';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;

const MainTemplate = ({ children }) => {
  const [isNewItemSliderVisible, setNewItemSliderVisible] = useState(false);

  const pageType = useGetCurrentPage();

  const toggleNewItemSlider = () => {
    setNewItemSliderVisible(!isNewItemSliderVisible);
  };

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {children}
          <NewItemSlider isVisible={isNewItemSliderVisible} toggleNewItemSlider={toggleNewItemSlider} />
          {pageType === 'home' || isNewItemSliderVisible ? null : (
            <StyledButtonIcon icon={plusIcon} onClick={toggleNewItemSlider} />
          )}
          {isNewItemSliderVisible && <StyledBackdrop onClick={toggleNewItemSlider} />}
        </ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
