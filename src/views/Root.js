import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from 'theme/GlobalStyle';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <div>
      </div>
    </ThemeProvider>
  );
}

export default Root;