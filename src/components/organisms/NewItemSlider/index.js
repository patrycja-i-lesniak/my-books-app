import { BsCaretRightFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { StyledWrapper, StyledHeader, StyledParagraph, CloseSliderButton } from './styled';
import Form from 'components/molecules/Forms/Form';
import withContext from 'hoc/withContext';

const NewItemSlider = ({ isVisible, pageContext, toggleNewItemSlider }) => {
  const { id } = useParams();

  return (
    <StyledWrapper isVisible={isVisible}>
      {id ? (
        <>
          <StyledHeader secondary>Edit {pageContext && pageContext.slice(0, -1)}</StyledHeader>
          <StyledParagraph>
            <strong>Load saved data</strong> or fill in all fields of the form and click the <strong>edit</strong> button.
          </StyledParagraph>
        </>
      ) : (
        <>
          <StyledHeader secondary>Add new {pageContext && pageContext.slice(0, -1)}</StyledHeader>
          <StyledParagraph>
            Fill in all fields of the form and click the add button.
          </StyledParagraph>
        </>
      )}
      <Form toggleNewItemSlider={toggleNewItemSlider} id={id} />
      <CloseSliderButton type="button" onClick={toggleNewItemSlider}>
        <BsCaretRightFill />
      </CloseSliderButton>
    </StyledWrapper>
  );
};

NewItemSlider.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  toggleNewItemSlider: PropTypes.func,
};

NewItemSlider.defaultProps = {
  isVisible: false,
};

export default withContext(NewItemSlider);
