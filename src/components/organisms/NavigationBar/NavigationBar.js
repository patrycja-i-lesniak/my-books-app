import { NavLink } from 'react-router-dom';
import {
  StyledWrapper,
  StyledNavigationWrapper,
  StyledLogoLink,
  StyledLinkList,
  StyledItem,
  StyledButton,
} from './styled';

import SearchBox from 'components/atoms/SearchBox';

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
        <StyledItem as={NavLink} to="/quotes">
          quotes
        </StyledItem>
      </StyledLinkList>
    </StyledNavigationWrapper>
    <SearchBox />
    <StyledButton secondary>log in</StyledButton>
  </StyledWrapper>
);

export default NavigationBar;
