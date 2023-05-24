import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Exclusion from '../pages/Exclusion';
import Word from '../pages/Word';
import Page404 from '../pages/Page404';

export default function Router() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="/exclusion/" component={Exclusion} isClosed />
      <MyRoute exact path="/word/" component={Word} isClosed />
      <MyRoute exact path="/word/:id/edit" component={Word} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
