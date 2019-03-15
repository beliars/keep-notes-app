import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";

interface Props {
  component: Component;
  isGuest: boolean;
  rest: any;
}

const PrivateRoute: React.FunctionComponent<Props | any> = ({ component: Component, isGuest, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      !isGuest == true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/sign-in',
          state: {from: props.location}
        }}/>
    )}/>
  );
};

export default PrivateRoute;
