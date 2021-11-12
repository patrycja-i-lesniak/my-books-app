import styled, { ThemeProvider } from 'styled-components';
import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'theme/GlobalStyle';
import PageContext from 'context';
import Modal from 'components/organisms/Modal';
import { booksData, authorsData, notesData } from 'assets/booksData';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import { StyledBackdrop } from 'theme/GlobalStyle';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 999;
`;

const initialBookState = booksData;
const initialAuthorState = authorsData;
const initialNoteState = notesData;

class MainTemplate extends Component {
  state = {
    pageType: 'home',
    book: [...initialBookState],
    author: [...initialAuthorState],
    note: [...initialNoteState],
    isModalOpen: false,
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['home', 'books', 'authors', 'notes'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
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
    const { children } = this.props;
    const { pageType } = this.state;
    const { isModalOpen } = this.state;
    const addItemFn = { ...this.state, addItem: this.state };

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}
          <StyledButtonIcon icon={plusIcon} onClick={this.openModal} />
          {isModalOpen && (
            <>
              <StyledBackdrop onClick={this.closeModal} />
              <Modal closeModalFn={this.closeModal} addItemFn={addItemFn} />
            </>
          )}
          </ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
