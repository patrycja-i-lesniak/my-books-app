import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';

import api from 'api';
import { validationSchema } from './validationSchema';
import RequiredBox from 'components/molecules/RequredBox/RequiredBox';
import ErrorPopup from 'components/molecules/Popups/ErrorPopup';
import SuccessPopup from 'components/molecules/Popups/SuccessPopup';
import { StyledForm, StyledButton, InputField, StyledLabel, Checkbox, Label } from './styled';
import { initialValues } from 'components/molecules/NewQuoteForm/initialValues';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const NewQuoteForm = (...props) => {
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState();


  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const history = useHistory();

  const handlePopupClose = () => {
    setPopup(false);
    setErrorPopup(false);
    console.log('Close popup');
  };

  const handleSuccess = () => {
    history.push('/');
    history.replace('quotes');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        handleSuccess();
        console.log('Values from formik', values);

        const quote = {
          records: [
            {
              fields: {
                quote: values.quote,
                title: values.title,
                author: values.author,
                checked: values.checked,
              },
            },
          ],
        };

        api
          .post('/quotes', quote)
          .then(response => {
            setPopup(true);
            resetForm();
            console.log('Response from API in formik', response);
            console.log('Successfully submitted.');
          })
          .catch(err => {
            setErrorPopup(true);
            console.error(err);
            console.log('The form could not be sent.');
          });
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <StyledForm method="POST" autoComplete="off" onSubmit={handleSubmit}>
          <>
            {errorPopup && (
              <ErrorPopup handlePopupClose={handlePopupClose} handleReset={handleReset} />
            )}
            {popup && (
              <SuccessPopup handlePopupClose={handlePopupClose} handleReset={handleReset} />
            )}
          </>
          <>
            <StyledLabel as="label" htmlFor="quote">
              quote
            </StyledLabel>
            <InputField
              textarea
              type="text"
              name="quote"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.quote}
            />
            <ErrorMessage name="quote">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            <StyledLabel as="label" htmlFor="title">
              title
            </StyledLabel>
            <InputField
              as="input"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              autoComplete="given-name"
            />
            <ErrorMessage name="title">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            <StyledLabel as="label" htmlFor="author">
              author
            </StyledLabel>
            <InputField
              as="input"
              type="text"
              name="author"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
              autoComplete="given-name"
            />
            <ErrorMessage name="author">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            <Label forHtml="checked">
              {checked ? <AiFillHeart /> : <AiOutlineHeart />}
              <Checkbox
                type="checkbox"
                name="checked"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.checked}
                checked={checked}
                onClick={toggleCheckbox}
              />
            </Label>
          </>
          <StyledButton type="submit">Add new quote</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default NewQuoteForm;
