import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './App.scss';
import store from '../../redux/store';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';
import Home from '../../pages/Home/Home';
import Trash from '../../pages/Trash/Trash';
import NotFound from '../../pages/NotFound/NotFound';

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
            <Router>
              <main className='main'>
                <Switch>
                  <Route path="/sign-up" exact component={SignUp}/>
                  <Route path="/sign-in" exact component={SignIn}/>
                  <Route path="/" exact component={Home}/>
                  <Route path="/trash" component={Trash}/>
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
