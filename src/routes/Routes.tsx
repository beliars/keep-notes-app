import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import SignUp from '../components/pages/SignUp/SignUp';
import SignIn from '../components/pages/SignIn/SignIn';
import Home from '../components/pages/Home/Home';
import Trash from '../components/pages/Trash/Trash';
import PrivateRoute from './PrivateRoute';
import NotFound from '../components/pages/NotFound/NotFound';

import { RootState } from '../redux/store';
import { AuthState } from '../redux/auth/states';


interface StateProps {
  auth: AuthState,
}

type Props = StateProps;

const Routes: React.FunctionComponent<Props> = (props: Props) => {
  const {auth} = props;
  const {isGuest} = auth;
  console.log(isGuest);
  return (
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

const mapStateToProps = (state: RootState): StateProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Routes);
