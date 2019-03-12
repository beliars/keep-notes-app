import React, {Component} from 'react';

import './SignUp.scss';
import SignUpForm, { SignUpFormData } from './SignUpForm/SignUpForm';
import { RootState } from '../../../redux/store';
import { ActionTypes } from '../../../redux/application/actions';
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
    console.log(authRequests);
    return (
      <div className="signup-page">
        <SignUpForm isLoading={authRequests.signup.loading} onSubmit={this.handleSubmitSignUpForm}/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  authRequests: state.requests.auth,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => (
  {
    submitSignUpForm: () => {
      dispatch({type: ActionTypes.TOGGLE_SIDEBAR});
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);