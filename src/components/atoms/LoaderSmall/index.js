import PropTypes from 'prop-types';
import { LoaderContainer, Load, StyledParagraph } from './styled.js';
import Header from 'components/atoms/Header/Header';

const LoaderSmall = () => (
  <LoaderContainer>
    <Header secondary>Loading data...</Header>
    <StyledParagraph>Please wait...</StyledParagraph>
    <Load />
  </LoaderContainer>
);

export default LoaderSmall;
