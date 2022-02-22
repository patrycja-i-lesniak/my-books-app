import { useState, useEffect } from 'react';
import { SearchField, SearchWrapper } from './styled';
import Button from 'components/atoms/Button/Button';
import { Formik, Form, Field } from 'formik';

const SearchBox = () => {
  const [text, setText] = useState([]);

  return (
 <SearchWrapper>
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setInput('');
        otherStuff();

        const book = {
          records: [
            {
              fields: {
                title: values.title,
                firstName: values.firstName,
                lastName: values.lastName,
              },
            },
          ],
        };

        base('books').find('recEGlb6fFv9fItYx', function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Retrieved', record.id);
        });
      }}
    >
      {formikProps => (
        <Form>
          <div>
            <SearchField
              name="query"
              onChange={formikProps.handleChange}
              value={formikProps.values.query}
            />
          </div>
        </Form>
      )}
    </Formik>
    </SearchWrapper>
  );
};

export default SearchBox;
