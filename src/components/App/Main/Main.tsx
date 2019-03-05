import React, { Component } from 'react';
import {Route} from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';
import Header from '../../Header/Header';

export default class Main extends Component {
  render() {
    return (
        <div className="app-main">
          <Header />
          <Route path="" exact component={HomePage}/>
        </div>
    );
  }
}
