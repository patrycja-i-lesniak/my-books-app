import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

import api from 'api';
import { validationSchema } from './validationSchema.js';
import { initialValues } from './initialValues.js';
import { StyledWrapper, Top, Text, Quote, ButtonSmall, QuoteWrapper } from './styled.js';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Label = styled.label`
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lipstick};
  display: block;
`;

const Checkbox = styled.input.attrs({ type: 'submit' })`
  width: 3rem;
  height: 3rem;
  display: none;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    width: 100%;
  }
`;

const QuoteCard = item => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const [isEditPopupOpen, setEditPopupOpen] = useState(true);

  const toggleEditPopup = () => {
    setEditPopupOpen(!isEditPopupOpen);
    console.log('Edit popup is open');
  };

  const handleEditQuotePopupClose = () => {
    setEditQuotePopupOpen(false);
    console.log('Close EditQuotePopup');
  };

  console.log(item);

  return (
    <StyledWrapper>
      <Top />
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async values => {
          // handleSuccess();
          console.log('Values from formik', values);

          const quote = {
            records: [
              {
                fields: {
                  title: values.title,
                  quote: values.quote,
                  author: values.author,
                  checked: values.checked,
                },
              },
            ],
          };

          api
            .post('/quotes', quote)
            .then(response => {
              // setPopup(true);
              // resetForm();
              console.log('Response from API in formik', response);
              console.log('Successfully submitted.');
            })
            .catch(err => {
              // setErrorPopup(true);
              console.error(err);
              console.log('The form could not be sent.');
            });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <StyledForm method="POST" autoComplete="off" onSubmit={handleSubmit}>
            <Label forHtml="checked">
              {checked ? <AiFillHeart /> : <AiOutlineHeart type="submit" />}
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
          </StyledForm>
        )}
      </Formik> */}

      <Quote>{item.quote}</Quote>
      <QuoteWrapper>
        <ButtonSmall>edit</ButtonSmall>
        <Text>{item.title}</Text>
      </QuoteWrapper>
      <QuoteWrapper>
        <ButtonSmall secondary>delete</ButtonSmall>
        <Text>{item.author}</Text>
      </QuoteWrapper>

      {/* <EditQuotePopup isVisible={isEditPopupOpen} toggleEditPopup={toggleEditPopup} /> */}
    </StyledWrapper>
  );
};

QuoteCard.propTypes = {
  item: PropTypes.object,
};

export default QuoteCard;
