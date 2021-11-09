import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  max-width: 1080px;
  margin: 50px auto;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px 20px;
  justify-items: center;
  position: relative;

  ${({ pageType }) =>
    pageType === 'home' &&
    css`
      grid-template-columns: 1fr;
    `};

  ${({ pageType }) =>
    pageType === 'notes' &&
    css`
      display: flex;
    `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <Header>Nagłówek strony {pageType}</Header>
      <StyledGrid pageType={pageType}>{children}</StyledGrid>
      <StyledButtonIcon icon={plusIcon} />
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.array,
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

GridTemplate.defaultProps = {
  pageType: 'home',
};

export default GridTemplate;
