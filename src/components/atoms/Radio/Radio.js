import styled from 'styled-components';
import PropTypes from "prop-types";
import Input from 'components/atoms/Input/Input';

const Label = styled.label`
  position: relative;
  display: inline-flex;
  margin: 0 20px 50px;
  align-items: center;
  font-size: 0.8rem;
  color: #808080;
`;

const StyledInput = styled(Input)`
  opacity: 0;
  position: absolute;
`;

const StyledRadioButton = styled.button`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #808080;
`;

const Radio = ({ id, checked, changeFn, children }) => (
  <Label>
    <StyledInput id={id} type="radio" checked={checked} onChange={changeFn} />
    <StyledRadioButton>{children}</StyledRadioButton>
  </Label>
);

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    changeFn: PropTypes.func,
    children: PropTypes.oneOf(['books', 'authors', 'notes']).isRequired,
};

export default Radio;
