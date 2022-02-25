import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'components/atoms/Button/Button';
import closeIcon from 'assets/icons/close.svg';
import { StyledWrapper, ButtonWrapper, StyledParagraph, CloseButton } from './styled';
import { base } from 'airtable/base';
import trashIcon from 'assets/icons/trash.svg';
import withContext from 'hoc/withContext';

const ConfirmationPopup = ({ handleDeleteFalse, id, pageContext }) => {
  const DeleteButton = () => {
    const history = useHistory();
    const deleteItem = () => {
      base(pageContext).destroy(id, function (err, deleteItem) {
        if (err) {
          console.error(err);

          return;
        }
        return console.log('Deleted record with id', id), history.goBack();
      });
    };
    return (
      <div className="position-absolute">
        <Button type="submit" icon={trashIcon} onClick={deleteItem}>
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
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'note', 'quotes']),
};

export default withContext(ConfirmationPopup);
