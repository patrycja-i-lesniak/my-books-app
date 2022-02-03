import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import Button from 'components/atoms/Button/Button';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  margin: 20px auto 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: inline-block;
    margin: 10px auto 20px;
  }
`;

export const InputField = styled(Field)`
  color: ${({ theme }) => theme.colors.lipstick};
  font-size: 1.5rem;
  border: none;
  line-height: 2.5;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  outline: none;
  padding: 5px 0 2px 10px;
  font-weight: bold;
  height: 4rem;

  ::placeholder {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.grey};
    :focus {
      color: transparent;
    }
  }

  :active {
    outline: 1px solid ${({ theme }) => theme.colors.lipstick};
  }

  ${({ textarea }) =>
    textarea &&
    css`
      height: 12rem;

      line-height: 1.5;

      resize: none;
      outline: none;
      width: 100%;
      font-weight: 400;
    `}
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grey};
  padding: 3px;
  background-color: white;
  display: inline-block;
  max-width: 120px;
  margin: 0 0 -20px 10px;
  z-index: 2;
`;


