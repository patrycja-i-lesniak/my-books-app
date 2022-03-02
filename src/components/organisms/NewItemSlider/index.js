import { BsCaretRightFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledHeader, StyledParagraph, CloseSliderButton } from './styled';
import NewItemForm from 'components/molecules/Forms/NewItemForm';
import withContext from 'hoc/withContext';

const NewItemSlider = ({ isVisible, pageContext, toggleNewItemSlider }) => (
  <>
    <StyledWrapper isVisible={isVisible}>
      <StyledHeader secondary>Add new {pageContext}</StyledHeader>
      <StyledParagraph>Fill in all the fields and click the button.</StyledParagraph>
      <NewItemForm toggleNewItemSlider={toggleNewItemSlider} />
      <CloseSliderButton type="button" onClick={toggleNewItemSlider}>
        <BsCaretRightFill />
      </CloseSliderButton>
    </StyledWrapper>
  </>
);

NewItemSlider.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  isVisible: PropTypes.bool,
  toggleNewItemSlider: PropTypes.func,
};

NewItemSlider.defaultProps = {
  isVisible: false,
};

export default withContext(NewItemSlider);
