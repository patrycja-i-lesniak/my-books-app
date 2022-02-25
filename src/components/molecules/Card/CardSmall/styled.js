import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph';
import Wrapper from 'components/atoms/Wrapper';
import LogoSmallWhite from 'assets/logo/logoSmallWhite.svg';
import LogoSmallPink from 'assets/logo/logoSmallPink.svg';

export const StyledImage = styled.img`
  width: 165px;
  height: 225px;
  background-color: ${({ theme }) => theme.colors.silver};
  background-image: url(${LogoSmallWhite});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 45%;
  margin-bottom: 10px;
  cursor: pointer;

  ${Wrapper}:hover & {
    background-image: url(${LogoSmallPink});
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

  ${Wrapper}:hover & {
    background-color: ${({ theme }) => theme.colors.lipstick};
  }
`;

export const StyledDate = styled.p`
  ${Wrapper}:hover & {
    color: white;
  }
`;

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
  padding: 20px;
  font-weight: 600;

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

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
