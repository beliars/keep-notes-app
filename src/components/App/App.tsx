import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import logo from '../../logo.svg';
import store from '../../redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}
