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
`;

const Footer = () => (
  <StyledWrapper>
    <Paragraph> © 2021 | Coded by Patrycja Leśniak</Paragraph>
  </StyledWrapper>
);

export default Footer;
