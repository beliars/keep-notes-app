import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Auth from '../../pages/Auth/Auth';

export default class AuthRoutes extends Component {
  render() {
    return (
        <div className="app-auth">
          <Route path="" component={Auth}/>
        </div>
    );
  }
}
