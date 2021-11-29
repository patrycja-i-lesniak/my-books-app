import { Centred, StyledParagraph, BlobLeft, BlobRight } from './styled';
import Header from 'components/atoms/Header/Header';


const Loader = () => (
  <Centred>
    <Header>Loading data...</Header>
    <StyledParagraph>Please wait.</StyledParagraph>
    <BlobLeft />
    <BlobRight />
  </Centred>
);

export default Loader;
