import PropTypes from 'prop-types';
import { NavigationBar } from 'components/organisms/Navigation';
import { FooterNavigation } from 'components/organisms/Navigation';
import withContext from 'hoc/withContext';

const UserPageTemplate = ({ children, pageContext }) => (
  <>
    <NavigationBar pageContext={pageContext} />
    {children}
    <FooterNavigation />
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
