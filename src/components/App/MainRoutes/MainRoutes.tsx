import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Header from '../../Header/Header';

export default class MainRoutes extends Component {
  render() {
    return (
        <div className="app-main">
          <Header />
          <Route path="" exact component={Home}/>
        </div>
    );
  }
}
