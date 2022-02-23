import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';


export const Wrapper = styled.div`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-flex;
  gap: 10px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const StyleIcon = Icon => styled(Icon)`
  font-size: 3rem;
`;
