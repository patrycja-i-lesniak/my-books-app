import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Authors from 'views/Authors';
import Notes from 'views/Notes';
import Books from 'views/Books';
import Home from 'views/Home';
import DetailsPage from 'views/DetailsPage';

const Root = () => (
    <HashRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route path="books/:id" component={DetailsPage} />
          <Route exact path="/authors" component={Authors} />
          <Route path="notes/:id" component={DetailsPage} />
          <Route exact path="/notes" component={Notes} />
          <Route path="notes/:id" component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </HashRouter>
  );

export default Root;
