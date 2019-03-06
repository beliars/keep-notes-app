import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './App.scss';
import store from '../../redux/store';
import AuthRoutes from './AuthRoutes/AuthRoutes';
import MainRoutes from './MainRoutes/MainRoutes';
import NotFound from '../../pages/NotFound/NotFound';

const theme = createMuiTheme();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </Provider>
    );
  }
}
