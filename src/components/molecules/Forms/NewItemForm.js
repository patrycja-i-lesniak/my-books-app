import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import {
  bookValidationSchema,
  authorValidationSchema,
  noteValidationSchema,
  quoteValidationSchema,
} from 'components/molecules/Forms/validationSchema';
import RequiredBox from 'components/molecules/RequredBox/RequiredBox';
import ErrorPopup from 'components/molecules/Popups/ErrorPopup';
import SuccessPopup from 'components/molecules/Popups/SuccessPopup';
import {
  StyledForm,
  InputField,
  StyledLabel,
  InputWrapper,
  DataWrapper,
  ButtonWrapper,
} from './styled';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { initialValues } from './initialValues';
import { Options } from './Options';
import { base } from 'airtable/base';
import { useFetchDetailsData } from 'customHooks';

const NewItemForm = ({ pageContext, toggleNewItemSlider }) => {
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [formValues, setFormValues] = useState('');

  const { id } = useParams();
  const { itemData } = useFetchDetailsData(id);
  const savedData = itemData.fields;

  const handlePopupClose = () => {
    setPopup(false);
    setErrorPopup(false);
    console.log('Close popup');
  };

  const endpoint = `/${pageContext}`;
  const history = useHistory();

  // VER.1

  // const handleSuccess = () => {
  //   history.push('/');
  //   history.replace(endpoint);
  // };

  // VER. 2

  const UseRefresh = () => {
    let handler;
    const refresh = () => {
      history.push('/');
      handler = setTimeout(() => history.push(endpoint), 10);
    };

    useEffect(() => {
      return () => handler && clearTimeout(handler);
    }, [handler]);
    return refresh;
  };

  const refresh = UseRefresh(history, endpoint);

  const handleSuccess = () => {
    if (history.location.pathname === endpoint) {
      refresh();
    } else {
      history.push(endpoint);
    }
  };

  return (
    <Formik
      initialValues={formValues ? formValues : initialValues}
      validationSchema={
        pageContext === 'books'
          ? bookValidationSchema
          : pageContext === 'authors'
          ? authorValidationSchema
          : pageContext === 'quotes'
          ? quoteValidationSchema
          : noteValidationSchema
      }
      onSubmit={async (values, { resetForm }) => {
        handleSuccess();

        const book = {
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
        };

        const author = {
          firstName: values.firstName,
          lastName: values.lastName,
          content: values.content,
          imageUrl: values.imageUrl,
          oficialWebsite: values.oficialWebsite,
        };

        const note = {
          title: values.title,
          imageUrl: values.imageUrl,
          date: values.date,
          content: values.content,
        };

        const quote = {
          title: values.title,
          author: values.author,
          quote: values.quote,
        };

        const FormAction = () => {
          const minifyRecord = record => {
            return {
              id: record.id,
              fields: record.fields,
            };
          };
          if (!id) {
            const createRecord = async fields => {
              const createdRecord = await base(pageContext).create(fields);
              console.log('Succesful created the record');
              setPopup(true);
            };
            createRecord(
              pageContext === 'books'
                ? book
                : pageContext === 'authors'
                ? author
                : pageContext === 'quotes'
                ? quote
                : note,
            ),
              function (err, records) {
                if (err) {
                  console.error(err);
                  return;
                }
              };
          } else {
            const updateRecord = async (id, fields) => {
              const updatedRecord = await base(pageContext).update(id, fields);
              console.log('Succesfull updated the record');
              setPopup(true);
            };
            updateRecord(
              id,
              pageContext === 'books'
                ? book
                : pageContext === 'authors'
                ? author
                : pageContext === 'quotes'
                ? quote
                : note,
            );
          }
        };

        FormAction();
      }}
      enableReinitialize={true}
    >
      {({ values, handleChange, handleBlur, handleSubmit, handleReset, setFieldValue }) => (
        <StyledForm method="POST" autoComplete="off" onSubmit={handleSubmit}>
          <>
            {errorPopup && (
              <ErrorPopup
                handlePopupClose={handlePopupClose}
                toggleNewItemSlider={toggleNewItemSlider}
                handleReset={handleReset}
              />
            )}
            {popup && (
              <SuccessPopup
                handlePopupClose={handlePopupClose}
                toggleNewItemSlider={toggleNewItemSlider}
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

          {pageContext === 'notes' || pageContext === 'quotes' ? null : (
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

          {pageContext === 'authors' || pageContext === 'quotes' ? null : (
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
                  <StyledLabel htmlFor="number of pages">pages</StyledLabel>
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
          {pageContext === 'quotes' && (
            <>
              <StyledLabel htmlFor="author">author</StyledLabel>
              <InputField
                as="input"
                type="text"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              <ErrorMessage name="author">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          )}
          {pageContext === 'quotes' ? (
            <>
              <StyledLabel htmlFor="quote">quote</StyledLabel>
              <InputField
                textarea
                type="text"
                name="quote"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quote}
              />
              <ErrorMessage name="quote">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
            </>
          ) : (
            <>
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
            </>
          )}
          {id ? (
            <ButtonWrapper>
              <Button secondary type="button" onClick={() => setFormValues(savedData)}>
                Load saved data
              </Button>
              <Button type="submit">Edit {pageContext && pageContext.slice(0, -1)}</Button>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <Button type="submit">Add new item</Button>
            </ButtonWrapper>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

NewItemForm.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  toggleNewItemSlider: PropTypes.func,
};

export default withContext(NewItemForm);
