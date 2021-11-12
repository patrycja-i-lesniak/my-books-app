import styled, { css } from 'styled-components';

const Header = styled.h1`
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.lipstick};
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
  line-height: 1.3;

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.gray};
      font-size: 2.6rem;
      margin: 3rem 0;
    `};
`;

export default Header;
