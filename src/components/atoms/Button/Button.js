import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.lipstick};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.lipstick};
  font-weight: 600;
  width: 120px;
  height: 36px;
  font-size: ${({ theme }) => theme.font.xxs};
  border-radius: 3px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  padding: 0;
  margin: 0;

  &:active {
    border-color: ${({ theme }) => theme.colors.lightLipstick};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lipstick};
    `}

  ${({ books }) =>
    books &&
    css`
      border: none;
      box-shadow: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray};
      font-size: ${({ theme }) => theme.font.xxs};
      font-weight: ${({ theme }) => theme.font.light};

      &:active {
        font-weight: ${({ theme }) => theme.font.bold};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export default Button;
