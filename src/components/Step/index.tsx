import { HTMLAttributes } from 'react';
import { StepContainer } from './styles';

interface StepProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isActive?: boolean
}

export const Step = ({ children, isActive, ...rest }: StepProps): JSX.Element => (
  <StepContainer isActive={!!isActive} type="button" disabled {...rest}>{children}</StepContainer>
);
