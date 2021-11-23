import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import trashIcon from 'assets/icons/trash.svg';
import { base } from 'airtable/base';

const StyledButtonIcon = styled(ButtonIcon)`
  margin-top: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const DeleteButton = ({ bookId }) => {
  const deleteBook = () => {
    base('books').destroy(bookId, function (err, deleteBook) {
      if (err) {
        console.log(err);
        return;
      }
      prompt('Deleted record', deleteBook.id);
      console.log('Item properly removed from the base');
    //   window.location.reload(false);
    });
  };
  return <StyledButtonIcon icon={trashIcon} onClick={deleteBook} />;
};

DeleteButton.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteButton;
