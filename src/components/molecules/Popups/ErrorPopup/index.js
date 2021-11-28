import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';

const ErrorPopup = ({ handlePopupClose }) => {
  return (
    <StyledWrapper>
      <StyledParagraph>The item could not be added. Check internet connection.</StyledParagraph>
      <CloseButton icon={closeIcon} type="button" onClick={handlePopupClose} />
      <ButtonWrapper>
        <Button type="button" onClick={handlePopupClose}>
          Back to books
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

ErrorPopup.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
};

export default ErrorPopup;
