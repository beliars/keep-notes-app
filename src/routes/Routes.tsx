import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import authService from '../shared/services/auth.service';

import SignUp from '../components/pages/SignUp/SignUp';
import SignIn from '../components/pages/SignIn/SignIn';
import Home from '../components/pages/Home/Home';
import Trash from '../components/pages/Trash/Trash';
import PrivateRoute from './PrivateRoute';
import NotFound from '../components/pages/NotFound/NotFound';

import { RootState } from '../redux/store';
import { AuthState } from '../redux/auth/states';
import { ActionTypes as UsersActionTypes } from '../redux/users/actions';
import { ActionTypes as AuthActionTypes } from '../redux/auth/actions';

interface StateProps {
  auth: AuthState,
}

interface DispatchProps {
  getSelfData(id: string): void,
  setGuestIsTrue(): void,
}

type Props = StateProps & DispatchProps;

class Routes extends Component<Props> {
  
  componentDidMount() {
    const {getSelfData, setGuestIsTrue} = this.props;
    if (authService.isSetSessionData) {
      const userId = authService.getSessionId;
      getSelfData(userId);
    } else {
      setGuestIsTrue();
    }
  }
  
  render() {
    const {auth} = this.props;
    const {isGuest} = auth;
    return (
      isGuest === null ?
        null :
        <Router>
          <main className='main'>
            <Switch>
              <Route path="/sign-up" exact component={SignUp}/>
              <Route path="/sign-in" exact component={SignIn}/>
              <PrivateRoute path='/' exact component={Home} isGuest={isGuest}/>
              <PrivateRoute path="/trash" component={Trash} isGuest={isGuest}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        </Router>
    );
  };
}

const mapStateToProps = (state: RootState): StateProps => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => (
  {
    getSelfData: (id: string) => {
      dispatch({
        type: UsersActionTypes.GET_SELF_DATA,
        payload: id
      });
    },
    setGuestIsTrue: () => {
      dispatch({
        type: AuthActionTypes.SET_GUEST_IS_TRUE,
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
