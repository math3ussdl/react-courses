import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import Login from './pages/Login';
import { isAuthenticated } from './services/auth';

interface IPrivateRouteData {
  component: any;
  [rest: string]: any;
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRouteData) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <PrivateRoute path="/app" component={Dashboard} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
