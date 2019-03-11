import React from 'react';
import {WrappedFieldProps} from 'redux-form';

export interface OwnProps {
  id: string,
  labelText: string,
  placeholder?: string,
  type: string,
  step?: string,
  disabled?: boolean,
  min?: string,
}

type Props = OwnProps & WrappedFieldProps;

const FormField = (props: Props) => {
  const {
    id, placeholder, step, min, input, labelText, type, disabled, meta: {touched, error}
  } = props;
  
  return (
    <div className='form-field'>
      <label
        htmlFor={id}
        className={type==='number' ? 'input-label input-label-number' : 'input-label'}
      >
        {labelText}
      </label>
      <input
        className={type==='number' ? 'input input-number' : 'input'}
        {...input}
        type={type}
        step={step}
        min={min}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
      {touched && (error && <span className='error error-field'>{error}</span>)}
    </div>
  );
};

export default FormField;