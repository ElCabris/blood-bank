import React from 'react';

function InputData({
  type = 'text',
  placeholder,
  children,
  className,
  onChange = () => {},
}) {
  return (
    <div className={`form-group ${className}`}>
      <label>{children}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </div>
  );
}

export default InputData;
