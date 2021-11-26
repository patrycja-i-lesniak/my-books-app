import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
// import { base } from 'airtable/base';

// function DeleteButton({ bookId }) {
  
//   const deleteBook = () => {
//     base('books').destroy(bookId, function (err, deleteBook) {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log('Deleted record', deleteBook.id);
//     });
//   };
//   return (
//     <Button onClick={deleteBook} type="button">
//       Yes
//     </Button>
//   );
// }

const ConfirmationPopup = ({ handleDeleteTrue, handleDeleteFalse }) => {
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

ConfirmationPopup.propTypes = {
  handleDeleteTrue: PropTypes.func.isRequired,
  handleDeleteFalse: PropTypes.func.isRequired,
};

export default ConfirmationPopup;
