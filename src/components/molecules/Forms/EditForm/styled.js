import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 98%;
  justify-content: flex-start;
  gap: 1rem;
`;

export const StyledButton = styled(Button)`
  margin: 10px 10px;
`;

export const InputField = styled(Field)`
  color: ${({ theme }) => theme.colors.lipstick};
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  font-size: 1.5rem;
  outline: none;
  padding: 10px;
  font-weight: bold;

  /* ::placeholder {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.grey};
    :focus {
      color: transparent;
    }
  } */

  :active {
    outline: 1px solid ${({ theme }) => theme.colors.lipstick};
  }

  ${({ textarea }) =>
    textarea &&
    css`
      min-height: 12rem;
      line-height: 1.5;
      resize: none;
      width: 100%;
      font-weight: 400;
    `}

  ${({ select }) =>
    select &&
    css`
      margin-top: 0.7rem;
      overflow: hidden;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.lipstick};
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

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  gap: 0.7rem;
  width: 49%;
`;

export const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99999;
  width: 32px;
  height: 32px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;
