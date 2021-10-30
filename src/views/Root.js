import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Authors from 'views/Authors';
import Notes from 'views/Notes';
import Books from 'views/Books';
import Home from 'views/Home';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';


const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/home'/>} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route path="books/:id" component={DetailsPageTemplate} />
          <Route exact path="/authors" component={Authors} />
          <Route path="notes/:id" component={DetailsPageTemplate} />
          <Route exact path="/notes" component={Notes} />
          <Route path="notes/:id" component={DetailsPageTemplate} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root
