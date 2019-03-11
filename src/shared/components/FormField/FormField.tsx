import React from 'react';
import {WrappedFieldProps} from 'redux-form';

import TextField from '@material-ui/core/TextField';

export interface OwnProps {
  id: string,
  label: string,
  placeholder?: string,
  type: string,
  step?: string,
  disabled?: boolean,
  min?: string,
}

type Props = OwnProps & WrappedFieldProps;

const FormField = (props: Props) => {
  const {
    id, placeholder, input, label, type, disabled, meta: {touched, error}
  } = props;
  return (
    <div className='form-field-wrapper'>
      <TextField
        error={!!(touched && error)}
        className={type==='number' ? 'form-field form-field-number' : 'form-field'}
        {...input}
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        margin="normal"
      />
      {touched && (error && <span className='error error-field'>{error}</span>)}
    </div>
  );
};

export default FormField;