import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './App.scss';
import store from '../../redux/store';
import Routes from '../../routes/Routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="app">
            <Routes/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
