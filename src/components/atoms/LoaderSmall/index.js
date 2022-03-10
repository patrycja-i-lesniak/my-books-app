import PropTypes from 'prop-types';
import { LoaderContainer, Load, StyledParagraph, Centred } from './styled.js';
import Header from 'components/atoms/Header/Header';
import withContext from 'hoc/withContext';

const LoaderSmall = ({pageContext}) => (
  <Centred>
    <LoaderContainer>
      <Header secondary> {pageContext === 'home' ? 'Loading last added books' : `Loading ${pageContext} data...`}</Header>
      <StyledParagraph>Please wait...</StyledParagraph>
      <Load />
    </LoaderContainer>
  </Centred>
);

LoaderSmall.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
};

export default withContext(LoaderSmall);
