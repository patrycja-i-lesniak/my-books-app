import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

*, ::after, ::before {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;            //CSS antialiasing cheatsheet
  -moz-osx-font-smoothing: grayscale;
}

html  {
  font-size: 62.5%large;
}


body {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    background-color:  ${({ theme }) => theme.white};

}
`;
