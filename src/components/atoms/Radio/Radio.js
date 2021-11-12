import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLabel = styled.label`
  display: inline-flex;
  margin: 0 30px;
  padding-bottom: 20px;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 0 10px;
    font-size: 1.3rem;
  }
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
        onSubmit={(values) => console.log(JSON.stringify(values))}
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
