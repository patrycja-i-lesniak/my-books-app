import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import withContext from 'hoc/withContext';


const ErrorPopup = ({ handlePopupClose, toggleNewItemBar, pageContext, handleReset }) => {
  const onClickActions = () => 
  [toggleNewItemBar(), handleReset()
  ];
  return (
    <StyledWrapper>
      <StyledParagraph>The item could not be added. </StyledParagraph>
      <CloseButton icon={closeIcon} type="button" onClick={handlePopupClose} />
      <ButtonWrapper>
        <Button type="button" onClick={onClickActions}>
          Back to {pageContext}
        </Button>
        <Button secondary type="button" onClick={handlePopupClose}>
          Try again
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

ErrorPopup.propTypes = {
  toggleNewItemBar: PropTypes.func.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  handleReset: PropTypes.func,
};

export default withContext(ErrorPopup);
