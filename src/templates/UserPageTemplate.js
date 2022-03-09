import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FooterNavigation, NavigationBar } from 'components/organisms/Navigation';
import withContext from 'hoc/withContext';
import NewItemSlider from 'components/organisms/NewItemSlider';
import { StyledBackdrop } from 'theme/GlobalStyle';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import { ItemSliderProvider } from 'context/ItemSliderContext';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

const UserPageTemplate = ({ children, pageContext }) => {
  const [isNewItemSliderVisible, setNewItemSliderVisible] = useState(false);

  const toggleNewItemSlider = () => {
    setNewItemSliderVisible(!isNewItemSliderVisible);
  };

  const { id } = useParams();

  return (
    <>
      <NavigationBar pageContext={pageContext} />
      <ItemSliderProvider value={toggleNewItemSlider}>{children}</ItemSliderProvider>
      <NewItemSlider isVisible={isNewItemSliderVisible} toggleNewItemSlider={toggleNewItemSlider} />
      {pageContext === 'home' || isNewItemSliderVisible || id ? null : (
        <StyledButtonIcon onClick={toggleNewItemSlider} icon={plusIcon} />
      )}
      {isNewItemSliderVisible && <StyledBackdrop onClick={toggleNewItemSlider} />}
      <FooterNavigation />
    </>
  );
};
UserPageTemplate.propTypes = {
  children: PropTypes.object,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

UserPageTemplate.defaultProps = {
  pageContext: 'home',
};

export default withContext(UserPageTemplate);
