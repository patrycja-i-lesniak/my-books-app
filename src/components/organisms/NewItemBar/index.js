import React, {useState} from 'react';
import Axios from 'axios';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input';
import {
  StyledWrapper,
  StyledHeader,
  StyledButton,
  StyledTextArea,
  StyledForm,
} from './styled';
// import SelectStatus from 'components/atoms/SelectStatus';
import ErrorPopup from 'components/molecules/Popups/ErrorPopup';
import SuccessPopup from 'components/molecules/Popups/SuccessPopup';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import withContext from 'hoc/withContext';


const NewItemBar = ({ isVisible, pageContext }) => {
  const [popup, setPopup] = useState( undefined);
  const [errorPopup, setErrorPopup] = useState(undefined);

  const initialValues = {
    type: '',
    title: '',
    firstName: '',
    lastName: '',
    imageUrl: '',
    series: '',
    date: '',
    dateOfBirth: '',
    dateOfDeath: '',
    isbn: '',
    translation: '',
    publishing: '',
    numberOfPages: '',
    content: '',
    // LClink: '',
    // status: '',
    // oficialWebsite: ',',
  };

  const key = process.env.REACT_APP_API_KEY;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    imageUrl: Yup.string().url(),
    series: Yup.string(),
    date: Yup.date(),
    dateOfBirth: Yup.date(),
    dateOfDeath: Yup.date(),
    isbn: Yup.number(),
    translation: Yup.string(),
    publishing: Yup.string(),
    numberOfPages: Yup.number(),
    content: Yup.string().required('Required'),
    // LClink: Yup.string().url(),
    // status: Yup.string(),
    // oficialWebsite: Yup.string().url(),
  });

  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledHeader secondary>Add new {pageContext}</StyledHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async values => {
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
                  dateOfBirth: values.dateOfBirth,
                  dateOfDeath: values.dateOfDeath,
                  isbn: values.isbn,
                  translation: values.translation,
                  publishing: values.publishing,
                  numberOfPages: values.numberOfPages,
                  content: values.content,
                  // LClink: values.LClink,
                  // status: values.status,
                  // oficialWebsite: values.oficialWebsite,
                },
              },
            ],
          };

          const axiosConfig = {
            headers: {
              Authorization: `Bearer ${key}`,
              'Content-Type': 'application/json',
            },
          };

          await Axios.post('https://api.airtable.com/v0/appsA6zFLzM76dL1o/books', book, axiosConfig)
            .then(response => {
              setPopup(true);
              console.log(response);
              console.log('Successfully submitted');
            })
            .catch(err => {
              setErrorPopup(true);
              console.error(err);
            });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm method="POST" autoComplete="off" onSubmit={handleSubmit}>
            <>
              {errorPopup && <ErrorPopup />}
              {popup && <SuccessPopup />}
            </>
            {pageContext === 'authors' ? null : (
              <Input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                autoComplete="given-name"
              />
            )}
            <ErrorMessage name="title">
              {msg => (
                <div>
                  <Paragraph>{msg} </Paragraph>
                </div>
              )}
            </ErrorMessage>
            {pageContext === 'notes' ? null : (
              <Input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            )}
            <ErrorMessage name="firstName">
              {msg => (
                <div>
                  <p>{msg} </p>
                </div>
              )}
            </ErrorMessage>
            {pageContext === 'notes' ? null : (
              <Input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            )}
            <ErrorMessage name="lastName">
              {msg => (
                <div>
                  <p>{msg} </p>
                </div>
              )}
            </ErrorMessage>
            <Input
              type="url"
              name="imageUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.imageUrl}
            />
            {pageContext === 'books' && (
              <Input
                type="text"
                name="series"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.series}
              />
            )}
            {pageContext === 'authors' ? (
              <>
                <Input
                  type="date"
                  name="dateOfBirth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfBirth}
                />
                <Input
                  type="date"
                  name="dateOfDeath"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfDeath}
                />
              </>
            ) : (
              <Input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
            )}

            {pageContext === 'books' && (
              <Input
                type="number"
                name="isbn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.isbn}
              />
            )}
            {pageContext === 'books' && (
              <Input
                type="text"
                name="translation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.translation}
              />
            )}
            {pageContext === 'books' && (
              <Input
                type="text"
                name="publishing"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.publishing}
              />
            )}
            {pageContext === 'books' && (
              <Input
                type="number"
                name="numberOfPages"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numberOfPages}
                maxLenght="4"
              />
            )}

            {pageContext === 'books' && (
              <Input
                type="url"
                name="LClink"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.LClink}
              />
            )}
            {/* {pageContext === 'authors' && (
              <Input
                type="url"
                name="oficialWebsite"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oficialWebsite}
              />
            )} */}
            {/* {pageContext === 'books' && (
              <SelectStatus
                type="select"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              />
            )} */}
            <StyledTextArea
              type="text"
              name="content"
              as="textarea"
              placeholder="add description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <ErrorMessage name="content">
              {msg => (
                <div>
                  <p>{msg} </p>
                </div>
              )}
            </ErrorMessage>
            <StyledButton type="submit">
              Add new item
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
}

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};


export default (withContext(NewItemBar));
