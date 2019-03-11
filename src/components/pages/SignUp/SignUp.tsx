import React, {Component} from 'react';

import './SignUp.scss';
import SignUpForm from './SignUpForm/SignUpForm';

export default class SignUp extends Component {
  render() {
    return (
      <div className="signup-page">
        <SignUpForm isLoading={false}/>
      </div>
    );
  }
}