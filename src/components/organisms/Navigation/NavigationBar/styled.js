import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import myBooksLogo from 'assets/logo/logoMyBooks.svg';
import Button from 'components/atoms/Button/Button';

export const StyledWrapper = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lipstick};
  grid-template-columns: 1fr 260px 120px;
  align-items: end;
  height: 80px;
  padding: 15px 40px;
  z-index: 9999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: 1fr 120px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    align-items: center;
  }
`;

export const StyledNavigationWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: end;
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: center;
  }
`;

export const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 200px;
  height: 50px;
  background-position: 50% 50%;
  background-image: url(${myBooksLogo});
  background-repeat: no-repeat;
`;

export const StyledLinkList = styled.ul`
  margin: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    padding: 0;
  }
`;

const activeClassName = 'active';

export const StyledItem = styled(NavLink).attrs(() => ({ activeClassName }))`
  padding: 0 20px 0 0;
  list-style: none;
  text-decoration: none;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

  &.${activeClassName} {
    font-weight: 700;
  }
`;

export const StyledButton = styled(Button)`
  font-weight: 600;
  font-size: 1.6rem;
  height: 36px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;
