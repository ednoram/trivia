import { DefaultChildrenType } from 'src/types';

export enum ButtonTypeEnum {
  Submit = 'submit',
  Button = 'button',
}

export type ButtonProps = Partial<{
  children: DefaultChildrenType;
  className: string;
  onClick: VoidFunction;
  disabled: boolean;
  submit: boolean;
}>;
