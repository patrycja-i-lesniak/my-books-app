import { NavLink } from 'react-router-dom';
import { ImQuotesLeft } from 'react-icons/im';
import { FaBars, FaBookOpen, FaUserEdit, FaPencilAlt } from 'react-icons/fa';

import { StyledWrapper, StyledItem } from './styled';

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
    <StyledItem as={NavLink} to="/quotes">
      <ImQuotesLeft />
    </StyledItem>
  </StyledWrapper>
);

export default MobileNavigation;