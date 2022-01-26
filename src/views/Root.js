import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Authors from 'views/Authors';
import Notes from 'views/Notes';
import Books from 'views/Books';
import Home from 'views/Home';
import AddQuotes from 'components/organisms/Quotes';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={routes.home} />} />
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.books} component={Books} />
          <Route path={routes.book} component={DetailsPage} />
          <Route exact path={routes.authors} component={Authors} />
          <Route path={routes.author} component={DetailsPage} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.addQuotes} component={AddQuotes} />
        </Switch>
      </MainTemplate>
    </HashRouter>
  </Provider>
);

export default Root;
