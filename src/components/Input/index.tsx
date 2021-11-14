import { HTMLAttributes } from 'react';
import { InputContainer } from './styles';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string
  type: string
}

export const Input = ({ ...rest }: InputProps): JSX.Element => (
  <InputContainer {...rest} />
);
