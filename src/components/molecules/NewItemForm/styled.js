import styled from 'styled-components';
import { Form } from 'formik';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  gap: 1.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 80%;
  }
`;

export const StyledTextArea = styled(Input)`
  height: 120px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  line-height: 1.5;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  resize: none;
  outline: none;
  font-size: 1.5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.lipstick};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.2rem;
  }
`;

export const StyledButton = styled(Button)`
  margin: 10px auto 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: inline-block;
    margin: 10px auto 100px;
  }
`;

export const RequiredWrapper = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-wrap: wrap;
    gap: 0;
  }
`;

export const NameContainer = styled.div`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const StyledSelect = styled(Form)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.lipstick};
  border-radius: 5px;
  padding: 10px 0;
  outline: none;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lipstick};
`;
