// import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'theme/GlobalStyle';
import PageContext from 'context';
import { booksData, authorsData, notesData } from 'assets/booksData';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar';
import { StyledBackdrop } from 'theme/GlobalStyle';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
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
    isNewItemBarOpen: false,
    isNewItemBarVisible: false,
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

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  toggleNewItemBar = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    const { isNewItemBarVisible } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            {children}
            <NewItemBar isVisible={isNewItemBarVisible} toggleNewItemBar={this.toggleNewItemBar} />
            {pageType === 'home' || isNewItemBarVisible ? null : (
              <StyledButtonIcon icon={plusIcon} onClick={this.toggleNewItemBar} />
            )}
            {isNewItemBarVisible && <StyledBackdrop onClick={this.toggleNewItemBar} />}
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
