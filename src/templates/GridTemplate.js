import { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import { Container } from 'components/atoms/Container';
import withContext from 'hoc/withContext';
import RotaryBox from 'components/molecules/RotaryBox/RotaryBox';
import QuotesBox from 'components/organisms/QuotesBox';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

import NewItemSlider from 'components/organisms/NewItemSlider';
import { StyledBackdrop } from 'theme/GlobalStyle';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 2rem;
  margin: 4rem auto 4rem;
  justify-items: center;
  justify-content: center;
  position: relative;

  ${({ notes }) =>
    notes &&
    css`
      grid-template-columns: repeat(auto-fill, 340px);
    `}
`;

const GridTemplate = ({ children, pageContext }) => {
  const [isNewItemSliderVisible, setNewItemSliderVisible] = useState(false);

  const toggleNewItemSlider = () => {
    setNewItemSliderVisible(!isNewItemSliderVisible);
  };

  return (
    <UserPageTemplate>
      <Container>
        {pageContext === 'home' ? (
          <>
            <QuotesBox />
            <RotaryBox />

            <Header>Last added books</Header>
          </>
        ) : (
          <Header>{capitalizeFirstLetter(pageContext)}</Header>
        )}

        {pageContext === 'notes' ? (
          <StyledGrid notes>{children}</StyledGrid>
        ) : pageContext === 'quotes' ? (
          <div>{children}</div>
        ) : (
          <StyledGrid>{children}</StyledGrid>
        )}

        <NewItemSlider
          isVisible={isNewItemSliderVisible}
          toggleNewItemSlider={toggleNewItemSlider}
        />
        {pageContext === 'home' || isNewItemSliderVisible ? null : (
          <StyledButtonIcon icon={plusIcon} onClick={toggleNewItemSlider} />
        )}
        {isNewItemSliderVisible && <StyledBackdrop onClick={toggleNewItemSlider} />}
      </Container>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

GridTemplate.defaultProps = {
  pageContext: 'home',
};

export default withContext(GridTemplate);
