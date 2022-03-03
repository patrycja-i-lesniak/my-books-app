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
  margin: 0 auto;
  width: 70vw;
  max-width: 500px;
  min-height: 500px;
  max-height: 700px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
  z-index: 99999;
  padding: 30px;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 90%;
  }
`;

export const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99999;
  width: 32px;
  height: 32px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
