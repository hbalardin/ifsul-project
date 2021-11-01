import { HTMLAttributes } from 'react';
import { InputContainer } from './styles';

type InputProps = HTMLAttributes<HTMLInputElement>

export const Input = ({ name, ...rest }: InputProps): JSX.Element => (
  <InputContainer name={name} {...rest} />
);
