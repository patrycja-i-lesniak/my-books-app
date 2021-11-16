import PropTypes from 'prop-types';
// import styled from 'styled-components';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';
import Footer from 'components/molecules/Footer';
import withContext from 'hoc/withContext';
// import MobileNavigation from 'components/organisms/MobileNavigation';

// const StyledMobileNavigation = styled(MobileNavigation)`
//   @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
//     display: none;
//   }
// `;

const UserPageTemplate = ({ children, pageContext}) => (
  <>
    <NavigationBar pageContext={pageContext}/>
    {children}
    {/* <StyledMobileNavigation /> */}
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.object,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

UserPageTemplate.defaultProps = {
  pageContext: 'home',
};

export default withContext(UserPageTemplate);
