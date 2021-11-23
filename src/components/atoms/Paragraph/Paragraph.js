import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
`;

export default Paragraph;
