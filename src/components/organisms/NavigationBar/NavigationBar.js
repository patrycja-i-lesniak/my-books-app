import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import myBooksLogo from 'assets/icons/myBooksLogo.svg';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px 120px;
  align-items: end;
  padding: 20px 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lipstick};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: 1fr 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr;
  }
`;

const StyledNavigationWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: end;
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 0;
  }
`;

const activeClassName = 'active';

const StyledItem = styled(NavLink).attrs(() => ({ activeClassName }))`
  padding: 0 30px 0 0;
  list-style: none;
  text-decoration: none;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

  &.${activeClassName} {
    font-weight: 700;
  }
`;

const StyledInput = styled(Input)`
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: none;
  }
`;

const NavigationBar = () => (
  <StyledWrapper>
    <StyledNavigationWrapper>
      <StyledLogoLink to="/" />
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
    <StyledInput search placeholder='search by title, author or ISBN'/>
    <Button>log in</Button>
  </StyledWrapper>
);

export default NavigationBar;
