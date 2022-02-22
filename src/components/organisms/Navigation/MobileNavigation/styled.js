import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const activeClassName = 'active';

export const StyledItem = styled(NavLink).attrs(() => ({ activeClassName }))`
  color: ${({ theme }) => theme.colors.white};
  font-size: 5rem;
  list-style: none;
  text-decoration: none;

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    font-size: 4.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;