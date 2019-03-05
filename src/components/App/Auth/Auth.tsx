import React, { Component } from 'react';
import { Route } from "react-router-dom";

import AuthPage from '../../pages/AuthPage/AuthPage';

export default class Auth extends Component {
  render() {
    return (
        <div className="app-auth">
          <Route path="" component={AuthPage}/>
        </div>
    );
  }
}
