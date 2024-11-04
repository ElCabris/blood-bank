import React from 'react';

function InputData({
  type = 'text',
  placeholder,
  children,
  className,
  value,
  onChange = () => {},
}) {
  return (
    <div className={`form-group ${className}`}>
      <label>{children}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...(value !== undefined && value !== null ? { value } : {})}
        onChange={onChange}
      />
    </div>
  );
}

export default InputData;
