import PropTypes from 'prop-types';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';
import Footer from 'components/molecules/Footer';


const UserPageTemplate = ({ children, pageType }) => (
  <>
    <NavigationBar pageType={pageType} />
    {children}
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
