import styled from 'styled-components';
import { MobileNavigation } from 'components/organisms/Navigation';
import { ContactMe } from './ContactMe';

export const StyledWrapper = styled.div`
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lipstick};
  height: 8rem;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
`;

const FooterNavigation = () => {
  return (
    <StyledWrapper>
      <ContactMe />
      <MobileNavigation />
    </StyledWrapper>
  );
};

export default FooterNavigation;
