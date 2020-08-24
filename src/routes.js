import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/details/:userId" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}
