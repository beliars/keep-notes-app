import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.scss';
import store from '../../redux/store';
import Auth from './Auth/Auth';
import Main from './Main/Main';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <main className='main-page'>
              <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/auth" component={Auth}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </main>
          </Router>
        </div>
      </Provider>
    );
  }
}
