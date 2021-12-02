import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import withContext from 'hoc/withContext';


const ErrorPopup = ({ handlePopupClose, toggleNewItemBar, pageContext }) => {
  return (
    <StyledWrapper>
      <StyledParagraph>The item could not be added. Check internet connection.</StyledParagraph>
      <CloseButton icon={closeIcon} type="button" onClick={handlePopupClose} />
      <ButtonWrapper>
        <Button type="button" onClick={toggleNewItemBar}>
          Back to {pageContext}
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

ErrorPopup.propTypes = {
  toggleNewItemBar: PropTypes.func.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes'])
};

export default withContext(ErrorPopup);
