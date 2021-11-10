import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

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

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 999;
`;

const Footer = () => (
  <StyledWrapper>
    <Paragraph> © 2021 | Coded by Patrycja Leśniak</Paragraph>
    <StyledButtonIcon icon={plusIcon} />
  </StyledWrapper>
);

export default Footer;