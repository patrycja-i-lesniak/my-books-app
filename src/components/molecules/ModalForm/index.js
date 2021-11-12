import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`;

const StyledForm = styled.form`
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

const ModalForm = ({addItemFn}) => {
  const { values, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
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
    },
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  return (
    <StyledWrapper>
      <StyledForm autoComplete="off" onSubmit={handleSubmit, addItemFn}>
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
    </StyledWrapper>
  );
};

ModalForm.propTypes = {
  addItemFn: PropTypes.func.isRequired,
}

export default ModalForm;