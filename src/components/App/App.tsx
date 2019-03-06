import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.scss';
import store from '../../redux/store';
import AuthRoutes from './AuthRoutes/AuthRoutes';
import MainRoutes from './MainRoutes/MainRoutes';
import NotFound from '../../pages/NotFound/NotFound';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <main className='main-page'>
              <Switch>
                <Route path="/" exact component={MainRoutes}/>
                <Route path="/" component={AuthRoutes}/>
                <Route component={NotFound}/>
              </Switch>
            </main>
          </Router>
        </div>
      </Provider>
    );
  }
}
