import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'theme/GlobalStyle';
import PageContext from 'context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar';
import { StyledBackdrop } from 'theme/GlobalStyle';
import { useLocation } from 'react-router';

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowDark};
`;

const MainTemplate = ({ children }) => {
  const [pageType, setPageType] = useState('home');
  const [isNewItemBarVisible, setNewItemBarVisible] = useState(false);

  const location = useLocation();

  const setCurrentPage = () => {
    const pageTypes = ['home', 'books', 'authors', 'notes'];

    const [currentPage] = pageTypes.filter(page => location.pathname.includes(page));
    if (pageType !== currentPage) {
      setPageType(currentPage);
    }
  };

  useEffect(() => {
    setCurrentPage();
  });

  const toggleNewItemBar = () => {
    setNewItemBarVisible(!isNewItemBarVisible);
  };

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          {children}
          <NewItemBar isVisible={isNewItemBarVisible} toggleNewItemBar={toggleNewItemBar} />
          {pageType === 'home' || isNewItemBarVisible ? null : (
            <StyledButtonIcon icon={plusIcon} onClick={toggleNewItemBar} />
          )}
          {isNewItemBarVisible && <StyledBackdrop onClick={toggleNewItemBar} />}
        </ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;

// class MainTemplate extends Component {
//   state = {
//     pageType: 'home',
//     isNewItemBarOpen: false,
//     isNewItemBarVisible: false,
//   };

//   componentDidMount() {
//     this.setCurrentPage();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     this.setCurrentPage(prevState);
//   }

//   setCurrentPage = (prevState = '') => {
//     const pageTypes = ['home', 'books', 'authors', 'notes'];
//     const {
//       location: { pathname },
//     } = this.props;

//     const [currentPage] = pageTypes.filter(page => pathname.includes(page));

//     if (prevState.pageType !== currentPage) {
//       this.setState({ pageType: currentPage });
//     }
//   };

//   toggleNewItemBar = () => {
//     this.setState(prevState => ({
//       isNewItemBarVisible: !prevState.isNewItemBarVisible,
//     }));
//   };

//   render() {
//     const { children } = this.props;
//     const { pageType } = this.state;
//     const { isNewItemBarVisible } = this.state;

//     return (
//       <div>
//         <PageContext.Provider value={pageType}>
//           <GlobalStyle />
//           <ThemeProvider theme={theme}>
//             {children}
//             <NewItemBar isVisible={isNewItemBarVisible} toggleNewItemBar={this.toggleNewItemBar} />
//             {pageType === 'home' || isNewItemBarVisible ? null : (
//               <StyledButtonIcon icon={plusIcon} onClick={this.toggleNewItemBar} />
//             )}
//             {isNewItemBarVisible && <StyledBackdrop onClick={this.toggleNewItemBar} />}
//           </ThemeProvider>
//         </PageContext.Provider>
//       </div>
//     );
//   }
// }

// MainTemplate.propTypes = {
//   children: PropTypes.element.isRequired,
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default withRouter(MainTemplate);
