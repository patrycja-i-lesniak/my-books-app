import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { axiosInstance, apiEndpoints } from 'airtable/base';
import {
  bookValidationSchema,
  authorValidationSchema,
  noteValidationSchema,
  quotesValidationSchema,
} from 'components/molecules/NewItemForm/validationSchema';
import RequiredBox from 'components/molecules/RequredBox/RequiredBox';
import ErrorPopup from 'components/molecules/Popups/ErrorPopup';
import SuccessPopup from 'components/molecules/Popups/SuccessPopup';
import {
  StyledForm,
  StyledButton,
  InputField,
  StyledLabel,
  InputWrapper,
  DataWrapper,
} from './styled';
import withContext from 'hoc/withContext';
import { initialValues } from './initialValues';
import { Options } from './Options';
import api from 'api';

const NewItemForm = ({ pageContext, toggleNewItemBar }) => {
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const handlePopupClose = () => {
    setPopup(false);
    setErrorPopup(false);
    console.log('Close popup');
  };

  console.log(pageContext);

  const endpoint = `/${pageContext}`;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        pageContext === 'books'
          ? bookValidationSchema
          : pageContext === 'authors'
          ? authorValidationSchema
          : pageContext === 'quotes'
          ? quotesValidationSchema
          : noteValidationSchema
      }
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        const book = {
          records: [
            {
              fields: {
                title: values.title,
                firstName: values.firstName,
                lastName: values.lastName,
                imageUrl: values.imageUrl,
                series: values.series,
                date: values.date,
                numberOfPages: values.numberOfPages,
                isbn: values.isbn,
                translation: values.translation,
                publishing: values.publishing,
                status: values.status,
                content: values.content,
                LClink: values.LClink,
              },
            },
          ],
        };

        const author = {
          records: [
            {
              fields: {
                firstName: values.firstName,
                lastName: values.lastName,
                content: values.content,
                imageUrl: values.imageUrl,
                dateOfBirth: values.dateOfBirth,
                dateOfDeath: values.dateOfDeath,
                oficialWebsite: values.oficialWebsite,
              },
            },
          ],
        };

        const note = {
          records: [
            {
              fields: {
                title: values.title,
                imageUrl: values.imageUrl,
                date: values.date,
                content: values.content,
              },
            },
          ],
        };

        const quote = {
          records: [
            {
              fields: {
                title: values.title,
                author: values.author,
                content: values.content,
              },
            },
          ],
        };

        api
          .post(
            endpoint,
            pageContext === 'books'
              ? (endpoint, book)
              : pageContext === 'authors'
              ? (endpoint, author)
              : pageContext === 'quotes'
              ? (endpoint, quote)
              : (endpoint, note),
          )
          .then(response => {
            setPopup(true);
            resetForm();
            console.log(response);
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
              <ErrorPopup
                handlePopupClose={handlePopupClose}
                toggleNewItemBar={toggleNewItemBar}
                handleReset={handleReset}
              />
            )}
            {popup && (
              <SuccessPopup
                handlePopupClose={handlePopupClose}
                toggleNewItemBar={toggleNewItemBar}
                handleReset={handleReset}
              />
            )}
          </>
          {pageContext === 'authors' ? null : (
            <>
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
            </>
          )}

          {pageContext === 'quotes' ? (
            <>
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

              <ErrorMessage name="title">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          ) : null}

          {pageContext === 'notes' || 'quotes' ? null : (
            <InputWrapper>
              <DataWrapper>
                <StyledLabel htmlFor="first name">first name</StyledLabel>
                <InputField
                  as="input"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <ErrorMessage name="firstName">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
              </DataWrapper>
              <DataWrapper>
                <StyledLabel htmlFor="last name">last name</StyledLabel>
                <InputField
                  as="input"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <ErrorMessage name="lastName">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
              </DataWrapper>
            </InputWrapper>
          )}

          {pageContext === 'quotes' ? null : (
            <>
              <StyledLabel htmlFor="image url">image url</StyledLabel>
              <InputField
                as="input"
                type="url"
                name="imageUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imageUrl}
              />

              <ErrorMessage name="imageUrl">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          )}
          {pageContext === 'books' && (
            <>
              <StyledLabel htmlFor="series">series</StyledLabel>
              <InputField
                as="input"
                type="text"
                name="series"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.series}
              />
              <ErrorMessage name="series">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          )}

          {pageContext === 'authors' ? (
            <InputWrapper>
              <DataWrapper>
                <StyledLabel htmlFor="date of birth">date of birth</StyledLabel>
                <InputField
                  as="input"
                  type="date"
                  name="dateOfBirth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfBirth}
                />
                <ErrorMessage name="dateOfBirth">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
              </DataWrapper>
              <DataWrapper>
                <StyledLabel htmlFor="date of death">date of death</StyledLabel>
                <InputField
                  as="input"
                  type="date"
                  name="dateOfDeath"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfDeath}
                />
                <ErrorMessage name="dateOfDeath">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
              </DataWrapper>
            </InputWrapper>
          ) : pageContext === 'quotes' ? null : (
            <>
              <StyledLabel htmlFor="date">date of publication</StyledLabel>
              <InputField
                as="input"
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <ErrorMessage name="date">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          )}

          {pageContext === 'books' && (
            <>
              <InputWrapper>
                <DataWrapper>
                  <StyledLabel htmlFor="ISBN">ISBN</StyledLabel>
                  <InputField
                    as="input"
                    type="number"
                    name="isbn"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.isbn}
                  />
                  <ErrorMessage name="isbn">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
                </DataWrapper>
                <DataWrapper>
                  <StyledLabel htmlFor="number of pages">number of pages</StyledLabel>
                  <InputField
                    as="input"
                    type="number"
                    name="numberOfPages"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numberOfPages}
                    maxLenght="4"
                  />
                  <ErrorMessage name="numberOfPages">
                    {msg => <RequiredBox msg={msg} />}
                  </ErrorMessage>
                </DataWrapper>
              </InputWrapper>

              <StyledLabel htmlFor="translation">translation</StyledLabel>
              <InputField
                as="input"
                type="text"
                name="translation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.translation}
              />
              <ErrorMessage name="translation">{msg => <RequiredBox msg={msg} />}</ErrorMessage>

              <StyledLabel htmlFor="publishing">publishing</StyledLabel>
              <InputField
                as="input"
                type="text"
                name="publishing"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.publishing}
              />
              <ErrorMessage name="publishing">{msg => <RequiredBox msg={msg} />}</ErrorMessage>

              <StyledLabel htmlFor="link LubimyCytać.pl">link LubimyCytać.pl</StyledLabel>
              <InputField
                as="input"
                type="url"
                name="LClink"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.LClink}
              />
              <ErrorMessage name="LClink">{msg => <RequiredBox msg={msg} />}</ErrorMessage>

              <InputField
                select
                as="select"
                name="status"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: 'block' }}
              >
                <Options />
              </InputField>
              <ErrorMessage name="status">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          )}
          {pageContext === 'authors' && (
            <>
              <StyledLabel htmlFor="oficial website">oficial website</StyledLabel>
              <InputField
                as="input"
                type="url"
                name="oficialWebsite"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oficialWebsite}
              />
              <ErrorMessage name="oficialWebsite">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          )}

          <StyledLabel htmlFor="content">description</StyledLabel>
          <InputField
            textarea
            type="text"
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <ErrorMessage name="content">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
          <StyledButton type="submit">Add new item</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

NewItemForm.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  toggleNewItemBar: PropTypes.func,
};

export default withContext(NewItemForm);
