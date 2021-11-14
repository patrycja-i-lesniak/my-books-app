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
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  text-decoration: none;
  text-align: center;

  &:active {
    border-color: ${({ theme }) => theme.colors.lightLipstick};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lipstick};
    `}
`;

export default Button;
