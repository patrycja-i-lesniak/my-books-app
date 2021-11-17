import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import withContext from 'hoc/withContext';
import { addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.lipstick};
  z-index: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 80px;
  width: 50vw;
  max-width: 600px;
  padding-left: 50px;
  height: 100vh;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
  /* overflow: auto; */
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
`;

const StyledTextArea = styled(Input)`
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  line-height: 1.5;
  border-radius: 10px;
  margin-top: 30px;
  resize: none;
  outline: none;
`;

const StyledButton = styled(Button)`
  margin: 30px auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: inline-block;
  }
`;

const NewItemBar = ({ pageContext, isVisible, handleClose, addItem }) => {
  
  
  return (
 <StyledWrapper isVisible={isVisible}>
      <Header secondary>Add new {pageContext}</Header>
      <Formik
      initialValues = {{
      type: '',
      title: '',
      author: '',
      imageUrl: '',
      series: '',
      date: '',
      isbn: '',
      translation: '',
      publishing: '',
      pages: '',
      content: '',
      LClink: '',
    }}
    onSubmit={values => {
        addItem(pageContext, values);
        handleClose();
    }}
      >
{({ values, handleChange, handleBlur }) => (

            <StyledForm autoComplete="off" 
            // onSubmit={handleSubmit, addItemFn }
            >
        <Input
          type="text"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
        />
        <Input
          type="text"
          name="author"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.author}
        />
        <Input
          type="url"
          name="imageUrl"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.imageUrl}
        />
        <Input
          type="text"
          name="series"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.series}
        />
        <Input
          type="date"
          name="date"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.date}
        />
        <Input
          type="number"
          name="isbn"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.isbn}
        />
        <Input
          type="text"
          name="translation"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.translation}
        />
        <Input
          type="text"
          name="publishing"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.publishing}
        />
        <Input
          type="number"
          name="pages"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pages}
          maxLenght="4"
        />
        <StyledTextArea
          type="text"
          name="content"
          as="textarea"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.content}
        />
        <StyledButton type="submit">Add new item</StyledButton>
      </StyledForm> 
  ) }
  </Formik>
    </StyledWrapper>
    
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
