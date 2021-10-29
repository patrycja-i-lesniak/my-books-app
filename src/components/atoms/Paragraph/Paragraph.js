import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.xs};
  font-weight: ${({ theme }) => theme.font.regular};
`;

export default Paragraph;
