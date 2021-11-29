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
  pageContext: PropTypes.oneOf(['books', 'authors', 'notes']),
  children: PropTypes.object,
};

export default withContext(DetailsPageTemplate);


