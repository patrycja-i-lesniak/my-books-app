import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button.js';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.js';

export const Top = styled.div`
  height: 0.7rem;
  background-color: ${({ theme }) => theme.colors.lipstick};
`;
export const StyledWrapper = styled.div`
  display: grid;
  padding-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.shadows.quoteBoxShadow};
  &:hover {
    ${Top} {
      background-color: ${({ theme }) => theme.colors.lightLipstick};
    }
  }
`;

export const QuoteWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Quote = styled.p`
  padding: 0 1.5rem 1rem;
  margin: 1rem 1rem;
  font-sie: 2rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainShaft};
`;

export const Text = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.lipstick};
  padding: 0 1.5rem;
  text-align: right;
  font-weight: 600;
`;

export const ButtonSmall = styled.button`
  width: 50px;
  height: 30px;
  margin: 5px 0 5px 20px;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lipstick};
  background-color: ${({ theme }) => theme.colors.lipstick};
  ${({ secondary }) =>
    secondary &&
    css`
      width: 70px;
      border: 1px solid ${({ theme }) => theme.colors.grey};
      background-color: ${({ theme }) => theme.colors.grey};
    `};
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 60px;
  width: 50px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lipstick};
  background: ${({ theme }) => theme.colors.lipstick};
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: end;
  padding: 10px 10px 0 0;
  margin: 0;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 3rem;
  height: 3rem;
`;

export const Label = styled.label`
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lipstick};
`;

export const Icon = styled.div`
`;