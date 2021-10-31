import { HTMLAttributes } from 'react';
import { InputContainer } from './styles';

type InputProps = HTMLAttributes<HTMLInputElement>

export const Input = ({ ...rest }: InputProps): JSX.Element => (
  <InputContainer {...rest} />
);
