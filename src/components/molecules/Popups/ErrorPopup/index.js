import React from 'react';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';

const ErrorPopup = () =>{
 
  return (
    <StyledWrapper>
      <StyledParagraph>The item could not be added. Check internet connection.</StyledParagraph>
      <CloseButton icon={closeIcon} type="button" />
      <ButtonWrapper>
        <Button type="button">Back to books</Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

export default ErrorPopup;
