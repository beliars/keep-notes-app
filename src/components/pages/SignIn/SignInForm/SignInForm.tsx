import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { compose } from 'redux';

import Button from '@material-ui/core/Button';

import './SignInForm.scss';
import FormField from '../../../../shared/components/FormField/FormField';
import requiredValidator from '../../../../shared/validators/required';
import emailValidator from '../../../../shared/validators/email';
import minLengthValidator from '../../../../shared/validators/min-length';


export interface OwnProps {
  isLoading: boolean,
  onSubmit: (...args: any[]) => any,
}

export interface SignInFormData {
  email: string,
  password: string,
}

type Props = OwnProps & InjectedFormProps<SignInFormData, OwnProps>;

const minLength = (value: string) => minLengthValidator(value, 6);

const SignInForm: React.FunctionComponent<Props> = (props: Props) => {
  const { handleSubmit, pristine, isLoading } = props;
  return (
    <form onSubmit={handleSubmit} className={"signin-form"}>
      <Field
        name="email"
        type="email"
        label="Email"
        component={FormField}
        validate={[requiredValidator, emailValidator]}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={FormField}
        validate={[requiredValidator, minLength]}
      />
      <div className="btn-wrap">
        <Button type="submit" variant="contained" disabled={pristine || props.invalid || isLoading}>
          Sign in
        </Button>
      </div>
    </form>
  )
};

export default compose<React.FunctionComponent<OwnProps>>(
  reduxForm<SignInFormData, OwnProps>({
    form: 'signUpForm',
  })
)(SignInForm);
