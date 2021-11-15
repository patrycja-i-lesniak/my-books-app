import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';
import Footer from 'components/molecules/Footer';
import MobileNavigation from 'components/organisms/MobileNavigation';

const StyledMobileNavigation = styled(MobileNavigation)`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <NavigationBar pageType={pageType} />
    {children}
    <StyledMobileNavigation />
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.object,
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

UserPageTemplate.defaultProps = {
  pageType: 'home',
};

export default UserPageTemplate;
