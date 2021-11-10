import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${normalize}

*, ::after, ::before {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;            //CSS antialiasing cheatsheet
  -moz-osx-font-smoothing: grayscale;
}

html  {
  font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    background-color: white;
}
`;

export const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 60%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`;
