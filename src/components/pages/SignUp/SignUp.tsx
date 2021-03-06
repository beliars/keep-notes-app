import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';
import SignUpForm, { SignUpFormData } from './SignUpForm/SignUpForm';
import { RootState } from '../../../redux/store';
import { ActionTypes } from '../../../redux/auth/actions';
import { AuthRequestsState } from '../../../redux/requests/nested-states/auth/states';
import { connect } from 'react-redux';

interface StateProps {
  authRequests: AuthRequestsState,
}

interface DispatchProps {
  submitSignUpForm(data: SignUpFormData): void,
}

type Props = StateProps & DispatchProps;

class SignUp extends Component<Props, StateProps> {
  
  handleSubmitSignUpForm = (data: SignUpFormData) => {
    this.props.submitSignUpForm(data);
  };
  
  render() {
    const {authRequests} = this.props;
    return (
      <div className="signup-page">
        <div className="page-title">Sign up</div>
        <SignUpForm isLoading={authRequests.signUp.loading} onSubmit={this.handleSubmitSignUpForm}/>
        <div className="link-wrap">
          <Link className="link" to="/sign-in">Sign in</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  authRequests: state.requests.auth,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => (
  {
    submitSignUpForm: (data: SignUpFormData) => {
      dispatch({
        type: ActionTypes.SIGN_UP,
        payload: data
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);