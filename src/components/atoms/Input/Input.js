import styled from "styled-components";

const Input = styled.input`
  position: relative;
  margin: 8px 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.lipstick};
  font-size: ${({ theme }) => theme.font.xxs};
  border: none;
  transition: 0.1s all;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver}; 
  outline: none;
`;

export default Input;