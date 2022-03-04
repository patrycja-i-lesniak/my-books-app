import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import { Container } from 'components/atoms/Container';

const DetailsPageTemplate = ({ children, pageContext }) => (
  <UserPageTemplate pageContext={pageContext}>
    <Container>{children}</Container>
  </UserPageTemplate>
);

DetailsPageTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  children: PropTypes.object,
};

export default withContext(DetailsPageTemplate);
