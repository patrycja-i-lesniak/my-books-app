import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavigationBar } from 'components/organisms/Navigation';
import { FooterNavigation } from 'components/organisms/Navigation';
import withContext from 'hoc/withContext';
import NewItemSlider from 'components/organisms/NewItemSlider';
import { StyledBackdrop } from 'theme/GlobalStyle';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import { ImPlus } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';

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
  const { id } = useParams();

  const toggleNewItemSlider = () => {
    setNewItemSliderVisible(!isNewItemSliderVisible);
  };

  return (
    <>
      <NavigationBar pageContext={pageContext} />
      {children}
      <NewItemSlider isVisible={isNewItemSliderVisible} toggleNewItemSlider={toggleNewItemSlider} />
      {pageContext === 'home' || isNewItemSliderVisible ? null : (
        <StyledButtonIcon onClick={toggleNewItemSlider}>
          {id ? <FiEdit /> : <ImPlus />}
        </StyledButtonIcon>
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
