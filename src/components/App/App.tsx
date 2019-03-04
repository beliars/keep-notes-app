import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import store from '../../redux/store';
import Header from '../Header/Header';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
        
        </div>
      </Provider>
    );
  }
}
