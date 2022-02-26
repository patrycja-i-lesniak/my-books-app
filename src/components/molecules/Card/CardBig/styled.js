import styled, { css } from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import LogoSmallWhite from 'assets/logo/logoSmallWhite.svg';
import Header from 'components/atoms/Header/Header';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 500px;
  justify-content: center;
  margin: 120px auto 0;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    padding: 50px 25px;
    margin: 80px auto 40px;
  }
`;

export const InnerWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: auto 1fr;
  gap: 40px;
`;

export const UpperContainer = styled.div`
  display: grid;
  align-items: start;
  grid-gap: 40px;
  grid-template-columns: auto 1fr auto;
  line-height: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const LowerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  line-height: 1.5;
`;

export const Details = styled.div``;

export const StyledImage = styled.img`
  width: 250px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.silver};
  background-image: url(${LogoSmallWhite});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 45%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    width: 220px;
    height: 308px;
  }
`;

export const StyledTitle = styled(Header)`
  font-size: 3rem;
  text-align: left;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    text-align: center;
  }
`;

export const StyledAuthor = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    text-align: center;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  align-items: start;
  margin-top: 10px;
  column-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: 180px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: auto;
    justify-items: center;
  }
`;

export const Label = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: block;
    display: none;
  }
`;

export const StyledData = styled.p`
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    text-align: center;
  }
`;

export const ShowMore = styled.button`
  display: block;
  border: none;
  background: none;
  padding: 2px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.bold};
  margin: 0 auto 0;
  color: ${({ theme }) => theme.colors.lipstick};
  padding-top: 20px;
`;

export const ButtonContentWrapper = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6px;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const Icon = styled(ButtonIcon)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Status = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: inherit;
  pointer: none;

  ${({ read }) =>
    read &&
    css`
      background-color: ${({ theme }) => theme.colors.japaneseLaurel};
    `};

  ${({ borrowed }) =>
    borrowed &&
    css`
      background-color: ${({ theme }) => theme.colors.toreaBay};
    `}

  ${({ toRead }) =>
    toRead &&
    css`
      background-color: ${({ theme }) => theme.colors.torchRed};
    `};

  ${({ toBuy }) =>
    toBuy &&
    css`
      background-color: ${({ theme }) => theme.colors.vividViolet};
    `};

  ${({ inProgress }) =>
    inProgress &&
    css`
      background-color: ${({ theme }) => theme.colors.webOrange};
    `};
`;

export const ExtraWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr auto;
  }
`;
