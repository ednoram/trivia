import { noop } from 'lodash';
import React from 'react';

import * as S from './Input.styled';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  value = '',
  className,
  autoFocus = false,
  maxLength,
  placeholder = '',
  autoComplete = 'off',
  onChange = noop,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const isInteger = value.match('^[0-9]*$');

    if (type === 'integer') {
      if (isInteger) {
        onChange(Number(value));
      }
    } else {
      onChange(value);
    }
  };

  return (
    <S.StyledInput
      name={name}
      type={type}
      value={value}
      maxLength={maxLength}
      autoFocus={autoFocus}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
