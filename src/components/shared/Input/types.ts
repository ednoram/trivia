import { InputHTMLAttributes } from 'react';

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

type InputTypeName = 'text' | 'integer';

export type InputProps = {
  value: string;
  onChange: (value: string | number) => void;
  name?: string;
  label?: string;
  className?: string;
  maxLength?: number;
  autoFocus?: boolean;
  placeholder?: string;
  type?: InputTypeName;
  autoComplete?: InputAttributes['autoComplete'];
};
