import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';


const Routes: React.FC = () => (
  /* Switch é usado, pois op fragment ele acaba utilizando todas as rotas */
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Repository" component={Repository} />
  </Switch>
);

export default Routes;
