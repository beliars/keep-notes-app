import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import './App.scss';
import store from '../../redux/store';
import Header from '../Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <Router>
            <main className='main-page'>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/auth" component={AuthPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </main>
          </Router>
        </div>
      </Provider>
    );
  }
}
