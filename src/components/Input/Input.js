import React from 'react';

export const Input = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <input type="text" {...field} {...props} className="textInput" />
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);