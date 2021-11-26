import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

export const StyledWrapper = styled.div`
  transform: translateY(-50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 50%;
  margin: 20px auto;
  width: 350px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
  z-index: 99999;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    max-width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    gap: 20px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 1.7rem;
  }
`;

export const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99999;
  width: 24px;
  height: 24px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;
