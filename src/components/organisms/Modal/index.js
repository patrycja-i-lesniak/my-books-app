import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Radio from 'components/atoms/Radio/Radio';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import closeIcon from 'assets/icons/close.svg';
import ModalForm from 'components/molecules/ModalForm';

const StyledWrapper = styled.div`
  padding: 0px 30px 10px;
  transform: translateY(-50%);
  position: fixed;
  top: 20px;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 50%;
  margin: 0 auto;
  width: 70vw;
  height: 70vh;
  max-width: 600px;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.modalShadow};
  z-index: 2;
  overflow: auto;
`;

const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 32px;
  height: 32px;
`;

const Modal = ({ closeModalFn }) => {
  return (
    <StyledWrapper>
      <Header secondary>Add new item</Header>
      <CloseButton icon={closeIcon} onClick={closeModalFn} />
      <Radio />
      <ModalForm />
    </StyledWrapper>
  );
};

Modal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
};

export default Modal;
