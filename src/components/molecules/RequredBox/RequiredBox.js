import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  display: flex;
  border: none;
  background-color: #fce9f0;
  border-radius: 5px;
  margin: -0.7rem 0 0;
  height: 30px;
  align-items: center;
  width: 100%;
`;

const StyledParagraph = styled.p`
  padding-left: 10px;
  margin: 0;
`;

const RequiredBox = ({ msg }) => (
  <Box>
    <StyledParagraph>{msg}</StyledParagraph>
  </Box>
);

RequiredBox.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default RequiredBox;
