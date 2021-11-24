import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Wrapper from 'components/atoms/Wrapper';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

export const StyledImage = styled.img`
  height: 225px;
  background-color: transparent;
  margin-bottom: 10px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  margin-top: 10px 0 0;

  ${Wrapper}:hover & {
    color: white;
  }
`;

export const StyledAuthor = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.regular};
  margin: 0;
  text-align: center;

  ${Wrapper}:hover & {
    color: white;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TrashButton = styled(ButtonIcon)`
  margin-top: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

