import React, {useState} from 'react';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import { Link } from 'react-router-dom';

const SuccessPopup = () => {

  const  [popup, setPopup] = useState({
    show: true,
    id: null
  });
const closePopup = () => {
  {popup && 
  setPopup({
    show: false,
    id: null,
  });
  console.log('Close popup');
}};

  return (
    <StyledWrapper>
      <StyledParagraph>Successfully submitted.</StyledParagraph>
      <CloseButton icon={closeIcon} type='button' onClick={closePopup}/>
      <ButtonWrapper>
        <Button as={Link} to='/books'>Back to books</Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

export default SuccessPopup;
