import { BsCaretRightFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { 
  StyledWrapper, 
  StyledHeader, 
  StyledParagraph, 
  CloseBarButton } 
  from './styled';
import NewItemForm from 'components/molecules/NewItemForm';
import withContext from 'hoc/withContext';

const NewItemBar = ({ isVisible, pageContext, toggleNewItemBar }) => (
  <>
    <StyledWrapper isVisible={isVisible}>
      <StyledHeader secondary>Add new {pageContext}</StyledHeader>
      <StyledParagraph>
        Fill in all the required fields and click the Add new item button to add new {pageContext} 
      </StyledParagraph>
      <NewItemForm toggleNewItemBar={toggleNewItemBar} />
      <CloseBarButton type="button" onClick={toggleNewItemBar}>
        <BsCaretRightFill />
      </CloseBarButton>
    </StyledWrapper>
  </>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  isVisible: PropTypes.bool,
  toggleNewItemBar: PropTypes.func,
};

NewItemBar.defaultProps = {
  isVisible: false,
};

export default withContext(NewItemBar);
