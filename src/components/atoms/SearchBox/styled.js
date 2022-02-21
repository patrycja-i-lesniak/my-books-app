import styled from 'styled-components';
import searchIcon from 'assets/icons/search.svg';
import {Field} from 'formik';

export const Search = styled(Field)`
  position: relative;
  color: ${({ theme }) => theme.colors.lipstick};
  padding: 10px 20px 10px 40px;
  font-size: 1.2rem;
  background-image: url(${searchIcon});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
  transition: 0.1s all;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.desertStorm};
  width: 260px;
  height: 36px;
  border-radius: 3px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lipstick};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: none;
  }
`;

export default Search;
