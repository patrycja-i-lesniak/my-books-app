import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Header from 'components/atoms/Header/Header';
import { Container } from 'components/atoms/Container';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import Modal from 'components/organisms/Modal';
import { StyledBackdrop } from 'theme/GlobalStyle';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin: 4rem auto;
  justify-items: center;
  position: relative;

  ${({ pageType }) =>
    pageType === 'home' &&
    css`
      grid-template-columns: 1fr;
    `};

  ${({ pageType }) =>
    pageType === 'notes' &&
    css`
      display: flex;
    `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 999;
`;

class GridTemplate extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState(() => ({
      isModalOpen: true,
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      isModalOpen: false,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { children, pageType } = this.props;

    return (
      <UserPageTemplate>
        <Container>
          <Header>Nagłówek strony {pageType}</Header>
          <StyledGrid pageType={pageType}>{children}</StyledGrid>
          <StyledButtonIcon icon={plusIcon} onClick={this.openModal} />
          {isModalOpen && (
            <>
              <StyledBackdrop />
              <Modal closeModalFn={this.closeModal} />
            </>
          )}
        </Container>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

GridTemplate.defaultProps = {
  pageType: 'home',
};

export default GridTemplate;
