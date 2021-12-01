import React, { useState } from 'react';
import { BsCaretRightFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import validationSchema from 'helpers/validationSchema';
import { axiosInstance, apiEndpoints } from 'airtable/base';
import Input from 'components/atoms/Input';
import {
  StyledWrapper,
  StyledHeader,
  StyledButton,
  StyledTextArea,
  StyledForm,
  NameContainer,
  RequiredWrapper,
  ContentContainer,
  StyledParagraph,
  StyledButton2,
} from './styled';
import RequiredBox from 'components/molecules/RequredBox/RequiredBox';
// import SelectStatus from 'components/atoms/SelectStatus';
import ErrorPopup from 'components/molecules/Popups/ErrorPopup';
import SuccessPopup from 'components/molecules/Popups/SuccessPopup';

import withContext from 'hoc/withContext';

const NewItemBar = ({ isVisible, pageContext }) => {
  const [popup, setPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  // const handleDelete = id => {
  //   setPopup({
  //     show: true,
  //     id,
  //   });
  //   console.log('open popup');
  // };

  // const handleDeleteTrue = () => {
  //   if (popup.show && popup.id) {
  //     const filteredBooks = books => books.filter(book => book.id !== popup.id);
  //     setBooks(filteredBooks);
  //     setPopup({
  //       show: false,
  //       id: null,
  //     });
  //     console.log('delete item & close popup');
  //   }
  // };

  const handlePopupClose = () => {
    setPopup(false);
    setErrorPopup(false);
    console.log('Close popup');
  };


  const initialValues = {
    type: '',
    title: '',
    firstName: '',
    lastName: '',
    imageUrl: 'https://',
    series: '',
    date: '',
    // dateOfBirth: '',===
    // dateOfDeath: '',
    isbn: '',
    translation: '',
    publishing: '',
    numberOfPages: '',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    LClink: 'https://',
    // status: '',
    // oficialWebsite: ',',
  };

  return (
    <>
      <StyledWrapper isVisible={isVisible}>
        <StyledHeader secondary>Add new {pageContext}</StyledHeader>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </StyledParagraph>
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
                    content: values.content,
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
                  },
                },
              ],
            };
            const note = {
              records: [
                {
                  fields: {
                    title: values.title,
                    content: values.content,
                  },
                },
              ],
            };

            await axiosInstance
              .post(
                apiEndpoints.booksList,
                book,
                apiEndpoints.authorsList,
                author,
                apiEndpoints.notesList,
                note,
              )
              .then(response => {
                setPopup(true);
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
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <StyledForm method="POST" autoComplete="off" onSubmit={handleSubmit}>
              <>
                {errorPopup && <ErrorPopup handlePopupClose={handlePopupClose} />}
                {popup && <SuccessPopup handlePopupClose={handlePopupClose} />}
              </>
              {pageContext === 'authors' ? null : (
                <>
                  <Input
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
              <RequiredWrapper>
                <NameContainer>
                  {pageContext === 'notes' ? null : (
                    <>
                    <Input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <ErrorMessage name="firstName">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
                    </>
                  )}
                  
                </NameContainer>
                <NameContainer>
                  {pageContext === 'notes' ? null : (
                    <>
                    <Input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <ErrorMessage name="lastName">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
                    </>
                  )}
                  
                </NameContainer>
              </RequiredWrapper>
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
              {/* {pageContext === 'authors' ? (
              <> 
            <Input
              type="date"
              name="dateOfBirth"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateOfBirth}
            />
            {/*
                <Input
                  type="date"
                  name="dateOfDeath"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfDeath}
                />
              </>
            ) : (*/}
              <Input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              {/* )} */}

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
                type="single-select"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              />
            )}  */}
              <ContentContainer>
                <StyledTextArea
                  type="text"
                  name="content"
                  as="textarea"
                  placeholder="add description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                />
                <ErrorMessage name="content">{msg => <RequiredBox msg={msg} />}</ErrorMessage>
              </ContentContainer>

              <StyledButton type="submit">Add new item</StyledButton>
            </StyledForm>
          )}
        </Formik>
        <StyledButton2 type="button" >
          <BsCaretRightFill />
        </StyledButton2>
      </StyledWrapper>
    </>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes']),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  isVisible: false,
};

export default withContext(NewItemBar);
