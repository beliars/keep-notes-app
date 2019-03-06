import React from 'react';
import { Route, Switch } from "react-router-dom";

import SignUp from '../../../pages/SignUp/SignUp';
import SignIn from '../../../pages/SignIn/SignIn';
import NotFound from '../../../pages/NotFound/NotFound';


const AuthRoutes = () => {
  return (
    <div className="app-auth">
      <Switch>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/sign-in" exact component={SignIn}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default AuthRoutes;