import styled from 'styled-components';
import { FaBars, FaBookOpen, FaUserEdit, FaPencilAlt, FaPlusCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 5rem;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    gap: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const activeClassName = 'active';

const StyledItem = styled(NavLink).attrs(() => ({ activeClassName }))`
  color: ${({ theme }) => theme.colors.white};
  font-size: 4.5rem;
  list-style: none;
  text-decoration: none;

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const MobileNavigation = () => (
  <StyledWrapper>
    <StyledItem as={NavLink} to="/home">
      <FaBars />
    </StyledItem>
    <StyledItem as={NavLink} to="/books">
      <FaBookOpen />
    </StyledItem>
    <StyledItem as={NavLink} to="/authors">
      <FaUserEdit />
    </StyledItem>
    <StyledItem as={NavLink} to="/notes">
      <FaPencilAlt />
    </StyledItem>
    <StyledItem as={NavLink} to="/notes">
      <FaPlusCircle />
    </StyledItem>
  </StyledWrapper>
);

export default MobileNavigation;
