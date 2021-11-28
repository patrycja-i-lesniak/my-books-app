import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Wrapper from 'components/atoms/Wrapper';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

export const StyledImage = styled.img`
  width: 165px;
  height: 225px;
  background-color: ${({ theme }) => theme.colors.silver};
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 50%;
  margin-bottom: 10px;
  z-index: 999;

  ${Wrapper}:hover & {
    background-color: ${({ theme }) => theme.colors.lipstick};
  }
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
  ${Wrapper}:hover & {
    color: white;
  }
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


export const StyledDate = styled.p``;

export const ShowMore = styled.button`
  display: block;
  border: none;
  background: none;
  padding: 2px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto 0;
  color: ${({ theme }) => theme.colors.lipstick};
  padding: 10px;

  ${Wrapper}:hover & {
    color: white;
  }
`;

export const ButtonContentWrapper = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6px;
  align-items: center;
`;
