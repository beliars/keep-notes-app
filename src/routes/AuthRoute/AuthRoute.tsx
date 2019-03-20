import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";
import { AuthState } from '../../redux/auth/states';
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';

interface StateProps {
  auth: AuthState,
}

interface ComponentProps {
  component: Component;
  rest: any;
}

type Props = StateProps & ComponentProps;

const AuthRoute: React.FunctionComponent<Props | any> = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      auth.isGuest == true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/',
          state: {from: props.location}
        }}/>
    )}/>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthRoute);
