import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../Login';
import __TestingGround from '../__TestingGround';

const AppRouter: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename={process.env.ROUTE_PATH}>
      <Switch>
        <ProtectedRoute exact path="/" component={__TestingGround} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
