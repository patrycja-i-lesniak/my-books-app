import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center; ;
`;

const StyledLabel = styled.label`
  display: inline-flex;
  margin: 0 30px 50px;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;

const StyledField = styled(Field)`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.lipstick};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const Radio = () => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          value: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form>
            <div role="group" aria-labelledby="my-radio-group">
              <StyledLabel>
                <StyledField type="radio" name="picked" value="books" />
                book
              </StyledLabel>
              <StyledLabel>
                <StyledField type="radio" name="picked" value="authors" />
                author
              </StyledLabel>
              <StyledLabel>
                <StyledField type="radio" name="picked" value="notes" />
                note
              </StyledLabel>
            </div>
          </Form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default Radio;
