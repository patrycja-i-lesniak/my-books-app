import PropTypes from 'prop-types';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <NavigationBar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element,
  pageType: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
};

UserPageTemplate.defaultProps = {
  pageType: 'home',
};

export default UserPageTemplate;
