import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import withContext from 'hoc/withContext';

const SuccessPopup = ({ handlePopupClose, pageContext, toggleNewItemSlider }) => {
  const onClickActions = () => {
    toggleNewItemSlider(), handlePopupClose();
  };

  return (
    <StyledWrapper>
      <StyledParagraph>Successfully submitted.</StyledParagraph>
      <CloseButton icon={closeIcon} type="button" onClick={handlePopupClose} />
      <ButtonWrapper>
        <Button type="reset" onClick={onClickActions}>
          Back to {pageContext}
        </Button>
        <Button secondary type="button" onClick={handlePopupClose}>
          Add next item
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

SuccessPopup.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  toggleNewItemSlider: PropTypes.func,
  handleReset: PropTypes.func,
};

export default withContext(SuccessPopup);
