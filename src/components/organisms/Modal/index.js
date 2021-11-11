import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Radio from 'components/atoms/Radio/Radio';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import closeIcon from 'assets/icons/close.svg';
import Input from 'components/atoms/Input';

const StyledWrapper = styled.div`
  padding: 0px 30px 10px;
  transform: translateY(-50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 50%;
  margin: 0 auto;
  width: 70vw;
  height: 70vh;
  max-width: 600px;
  max-height: 800px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.modalShadow};
  z-index: 2;
`;

const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 32px;
  height: 32px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// const StyledTextArea = styled(Input)`
//   min-height: 30vh;
//   background-color: ${({ theme }) => theme.colors.porcelain};
//   border: none;
//   border-radius: 10px;
//   color: ${({ theme }) => theme.colors.grey};
// `;

const StyledInput = styled(Input)`
  margin: 20px 0;
  padding: 10px 20px;
`;

// const type = {
//   book: 'book',
//   author: 'author',
//   note: 'note',
// };

// const description = {
//   books: 'book to your bookshelf',
//   authors: 'author',
//   notes: 'books to buy',
// };

// class Form extends React.Component {
//     state = {
//         type: types.book,
//         title: "",
//         author: "",
//         imageUrl: "",
//         series: "",
//         date: "",
//         isbn: "",
//         translation: "",
//         publishing: "",
//         pages: "",
//         description: "",
//     };

const Modal = ({ closeModalFn }) => {

return (
  <StyledWrapper>
    <Header secondary>Add new item</Header>
    <CloseButton icon={closeIcon} onClick={closeModalFn} />
    <Radio />
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />

          <StyledButton type="submit">Add new item</StyledButton>
        </StyledForm>
      )}
  </StyledWrapper>
);
};
 

  


Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
