import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lipstick};
  height: 5rem;
  width: 100vw;
  margin-top: 2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    height: 3rem;
    margin: 0;
  }
`;

const StyledParagraph = styled(Paragraph)`
 @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 1rem;
 }
`;

const Footer = () => (
  <StyledWrapper>
    <StyledParagraph> © 2021 | Coded by Patrycja Leśniak</StyledParagraph>
  </StyledWrapper>
);

export default Footer;
