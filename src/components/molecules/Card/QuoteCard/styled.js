import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button.js';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.js';

export const Top = styled.div`
  height: 0.7rem;
  background-color: ${({ theme }) => theme.colors.lipstick};
`;
export const StyledWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.shadows.quoteBoxShadow};
  position: relative;

  &:hover {
    ${Top} {
      background-color: ${({ theme }) => theme.colors.lightLipstick};
    }
  }
`;

export const Quote = styled.p`
  padding: 2.7rem 1.5rem 1.5rem;
  margin: 1rem 1rem;
  font-sie: 2rem;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lipstick};
`;

export const Text = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.grey};
  padding: 1rem 1.5rem 0;
  text-align: left;
  font-weight: 600;
`;

export const ButtonSmall = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  border-radius: 1rem;
  color: 1px solid ${({ theme }) => theme.colors.lipstick};
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: white;

  ${({ secondary }) =>
    secondary &&
    css`
      right: 10px;
      top: 50px;
    `}
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 60px;
  width: 50px;
  border-radius: 50%;
  color: 1px solid ${({ theme }) => theme.colors.lipstick};
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: white;
`;
