import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import myBooksLogo from 'assets/icons/myBooksLogo.svg';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: end;
  padding: 20px 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lipstick};

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
  }
`;

const StyledNavigationWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: end;
  justify-content: start;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 200px;
  height: 40px;
  background-position: 50% 50%;
  background-image: url(${myBooksLogo});
  background-repeat: no-repeat;
`;

const StyledLinkList = styled.ul`
  margin: 0;
  list-style: none;
`;

const activeClassName = 'active';

const StyledItem = styled(NavLink).attrs(() => 
({ activeClassName }))`
  padding: 0 50px 0 0;
  list-style: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

  &.${activeClassName} {
    font-weight: 700;
  }
`;

const NavigationBar = () => (
  <StyledWrapper>
    <StyledNavigationWrapper>
      <StyledLogoLink to="/"/>
      <StyledLinkList>
        <StyledItem as={NavLink} to="/books">
          books
        </StyledItem>
        <StyledItem as={NavLink} to="/authors">
          authors
        </StyledItem>
        <StyledItem as={NavLink} to="/notes">
          notes
        </StyledItem>
      </StyledLinkList>
    </StyledNavigationWrapper>
    <Button>new item</Button>
    <ButtonIcon></ButtonIcon>
  </StyledWrapper>
);

export default NavigationBar;
