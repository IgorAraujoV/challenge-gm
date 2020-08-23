import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:userId" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}
