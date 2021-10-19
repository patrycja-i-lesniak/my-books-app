import styled, {css} from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.lipstick};
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
  line-height: 1.3;

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `};
`;

export default Heading;
