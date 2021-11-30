import styled from 'styled-components';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px auto;
  align-items: center;
  justify-content: center;

`;

export const ErrorIcon = styled.img`
  width: 100px;
  margin-bottom: 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 80px;
  }
`;

export const Title = styled(Header)`
  font-size: 3rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
export const Subtitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  padding-bottom: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 1.6rem;
    padding-bottom: 3rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin-top: 24px;
  padding: 16px 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lipstick};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  outline: none;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    padding: 12px 16px;
    font-size: 12px;
  }
`;