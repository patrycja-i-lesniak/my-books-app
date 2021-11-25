import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';

const Popup = ({ handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <StyledWrapper>
      <StyledParagraph>Do you want to delete this item?</StyledParagraph>
      <CloseButton icon={closeIcon} onClick={handleDeleteFalse} />
      <ButtonWrapper>
        <Button onClick={handleDeleteTrue}>Yes</Button>
        <Button secondary onClick={handleDeleteFalse}>
          No
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

Popup.propTypes = {
  handleDeleteTrue: PropTypes.bool.isRequired,
  handleDeleteFalse: PropTypes.bool.isRequired,
};

export default Popup;
