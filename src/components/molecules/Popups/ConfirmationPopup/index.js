import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import { base } from 'airtable/base';
import trashIcon from 'assets/icons/trash.svg';

const ConfirmationPopup = ({ handleDeleteFalse, bookId}) => {
  function DeleteButton() {
    const history = useHistory();
    const deleteBook = () => {
      base('books').destroy(bookId, function (err, deleteBook) {
        if (err) {
          console.error(err);

          return;
        }
        return console.log('Deleted record', deleteBook.id), history.goBack();
      });
    };
    return (
      <div className="position-absolute">
        <Button type="submit" icon={trashIcon} onClick={deleteBook}>
          Yes
        </Button>
      </div>
    );
  }

  return (
    <StyledWrapper>
      <StyledParagraph>Do you want to delete this item?</StyledParagraph>
      <CloseButton icon={closeIcon} onClick={handleDeleteFalse} />
      <ButtonWrapper>
        <DeleteButton>Yes</DeleteButton>
        <Button secondary onClick={handleDeleteFalse}>
          No
        </Button>
      </ButtonWrapper>
    </StyledWrapper>
  );
};

ConfirmationPopup.propTypes = {
  handleDeleteTrue: PropTypes.func,
  handleDeleteFalse: PropTypes.func,
  bookId: PropTypes.string.isRequired,
};

export default ConfirmationPopup;
