import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import LayoutContainer from './layout_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <Route path='/' component={LayoutContainer} />
    </Switch>
  </div>
);

export default App;
