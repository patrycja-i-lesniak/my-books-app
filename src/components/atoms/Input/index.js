import PropTypes from "prop-types";
import styled from "styled-components";
import {Field} from 'formik'

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex; 
  flex-direction: column;
`;

const StyledField = styled(Field)`
  color: ${({ theme }) => theme.colors.lipstick};
  font-size: 1.5rem;
  border: none;
  line-height: 2.5;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  font-weight: bold;

  ::placeholder {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.grey};
    :focus {
      color: transparent;
    }
  }

  :active {
    outline: 1px solid ${({ theme }) => theme.colors.lipstick};
  }
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 5px;
`;

const Input = ({ name, type, onChange, onBlur, values, placeholder }) => (
  <StyledWrapper>
    <StyledLabel>{name}</StyledLabel>
    <StyledField
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={values}
      placeholder={placeholder}
    />
  </StyledWrapper>
);


Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'url', 'date']),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  values: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
}

export default Input; 