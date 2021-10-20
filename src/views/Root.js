import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from 'theme/GlobalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authors from 'views/Authors';
import Notes from 'views/Notes';
import Books from 'views/Books';
import Home from 'views/Home';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';

function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
          <Route path="/notes" component={Notes} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
