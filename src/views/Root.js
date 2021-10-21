import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Authors from 'views/Authors';
import Notes from 'views/Notes';
import Books from 'views/Books';
import Home from 'views/Home';

function Root() {
  return (
    <BrowserRouter>
     <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/authors" component={Authors} />
          <Route path="/notes" component={Notes} />
        </Switch>
    </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
