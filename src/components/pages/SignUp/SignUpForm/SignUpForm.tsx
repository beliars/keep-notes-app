import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import FormField from '../../../../shared/components/FormField/FormField';

export interface OwnProps {
  isLoading: boolean,
}

export interface SignUpFormData {
  email: string,
  password: string,
}

type Props = OwnProps & InjectedFormProps;

const SignUpForm = (props: Props) => {
  const { handleSubmit, pristine, isLoading } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={FormField}
        label="Email"
      />
      <Field
        name="password"
        type="password"
        component={FormField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={pristine || isLoading}>
          Submit
        </button>
      </div>
    </form>
  )
};

export default reduxForm<SignUpFormData, any>({
  form: 'signUpForm',
})(SignUpForm);