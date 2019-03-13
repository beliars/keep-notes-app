import React, {Component} from 'react';

import './SignIn.scss';
import SignUpForm, { SignInFormData } from './SignInForm/SignInForm';
import { RootState } from '../../../redux/store';
import { ActionTypes } from '../../../redux/auth/actions';
import { AuthRequestsState } from '../../../redux/requests/nested-states/auth/states';
import { connect } from 'react-redux';

interface StateProps {
  authRequests: AuthRequestsState,
}

interface DispatchProps {
  submitSignInForm(data: SignInFormData): void,
}

type Props = StateProps & DispatchProps;

class SignIn extends Component<Props, StateProps> {
  
  handleSubmitSignInForm = (data: SignInFormData) => {
    this.props.submitSignInForm(data);
  };
  
  render() {
    const {authRequests} = this.props;
    return (
      <div className="signin-page">
        <div className="page-title">
          Sign in
        </div>
        <SignUpForm isLoading={authRequests.signIn.loading} onSubmit={this.handleSubmitSignInForm}/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  authRequests: state.requests.auth,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => (
  {
    submitSignInForm: (data: SignInFormData) => {
      dispatch({
        type: ActionTypes.SIGN_IN,
        payload: data
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);