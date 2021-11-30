import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import LogoSmall from 'assets/icons/mblSmall.svg';
import Header from 'components/atoms/Header/Header';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 500px;
  justify-content: center;
  margin: 120px auto;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    padding: 50px 20px;
  }
`;

export const InnerWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: auto 1fr;
  gap: 20px;
`;

export const UpperContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: auto 1fr auto;
  line-height: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
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
  background-image: url(${LogoSmall});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 45%;
  margin-right: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 200px;
    height: 280px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    align-self: center;
    width: 250px;
    height: 350px;
    margin: 0 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    max-width: 150px;
    height: 200px;
  }
`;

export const StyledTitle = styled(Header)`
  font-size: 3rem;
  text-align: left;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    text-align: center;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  align-items: start;
  margin-top: 10px;
  column-gap: 20px;
`;

export const Label = styled.p`
  text-transform: uppercase;

  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.grey};
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: block;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    display: none;
  }
`;

export const StyledData = styled.p`
  font-size: 1.5rem;
  margin: 0;
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

  /* ${Wrapper}:hover & {
    color: grey;
  } */
`;

export const ButtonContentWrapper = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6px;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

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
  z-index: 5;
`;

export const LCButton = styled.a`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.lipstick};
  background-image: url(${({ icon }) => icon});
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: 5;
`;

export const Status = styled(Button)`
  background-color: green;
  color: black;
  border: none;
  display: flex;
  width: 50px;
  height: 50px;
  margin-bottom: 50px;
  border-radius: 50%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 0;
  }
`;

export const ExtraWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr auto;
  }
`;
