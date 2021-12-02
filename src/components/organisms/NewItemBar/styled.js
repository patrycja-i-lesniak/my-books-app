import styled from 'styled-components';
import { Form } from 'formik';
import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';


export const StyledWrapper = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.lipstick};
  z-index: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  width: 50vw;
  max-width: 600px;
  padding-left: 50px;
  height: 100vh;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  overflow: scroll;
  z-index:4;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100vw;
    border-left: none;
    padding-left: 0;
    align-items: center;
    max-width: unset;
  }
`;

export const StyledHeader = styled(Header)`
  margin: 100px 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top: 80px;
  }
`;

export const StyledParagraph = styled(Paragraph)`
width: 90%;
padding: 10px 25px;
text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 80%;
  }
`;

export const StyledTextArea = styled(Input)`
  height: 120px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  line-height: 1.5;
  border-radius: 5px;
  margin-top: 20px;
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
  margin: 30px auto 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: inline-block;
    margin: 30px auto 100px;
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

export const CloseBarButton = styled(Button)`
  position: fixed;
  top: 43%;
  width: 50px;
  height: 100px;
  left: -20px;
  border-radius: 0 40px 40px 0;
`;