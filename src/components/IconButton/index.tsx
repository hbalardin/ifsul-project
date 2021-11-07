import { HTMLAttributes, ReactNode } from 'react';
import { IconButtonContainer } from './styles';

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const IconButton = ({ children, ...rest }: IconButtonProps): JSX.Element => (
  <IconButtonContainer type="button" {...rest}>{children}</IconButtonContainer>
);
