import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import { Link } from 'react-router-dom';

const SuccessPopup = ({ handlePopupClose }) => {
  return (
    <StyledWrapper>
      <StyledParagraph>Successfully submitted.</StyledParagraph>
      <CloseButton icon={closeIcon} type="button" onClick={handlePopupClose} />
      <ButtonWrapper>
        <Button as={Link} to="/books" onClick={handlePopupClose}>
          Back to books
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

SuccessPopup.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
};

export default SuccessPopup;
