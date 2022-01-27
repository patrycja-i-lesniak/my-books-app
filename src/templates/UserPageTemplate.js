import PropTypes from 'prop-types';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';
import Footer from 'components/molecules/FooterNavigation';
import withContext from 'hoc/withContext';

const UserPageTemplate = ({ children, pageContext}) => (
  <>
    <NavigationBar pageContext={pageContext}/>
    {children}
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.object,
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

UserPageTemplate.defaultProps = {
  pageContext: 'home',
};

export default withContext(UserPageTemplate);
