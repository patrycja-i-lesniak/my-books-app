import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.lipstick};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.lipstick};
  font-size: 1.4rem;
  width: 120px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
  text-decoration: none;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    max-width: 100px;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.lightLipstick};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lipstick};
      box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};

      &:active {
        background-color: ${({ theme }) => theme.colors.silver};
      }
    `}
`;

export default Button;
