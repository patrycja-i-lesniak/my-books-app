import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';

import withContext from 'hoc/withContext';

const SuccessPopup = ({ handlePopupClose, pageContext, toggleNewItemBar }) => {
  return (
    <StyledWrapper>
      <StyledParagraph>Successfully submitted.</StyledParagraph>
      <CloseButton icon={closeIcon} type="button" onClick={handlePopupClose} />
      <ButtonWrapper>
        <Button type="button" onClick={toggleNewItemBar}>
          Back to {pageContext}
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

SuccessPopup.propTypes = {
  handlePopupClose: PropTypes.func.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  toggleNewItemBar: PropTypes.func,
};

export default withContext(SuccessPopup);
