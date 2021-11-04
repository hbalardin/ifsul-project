import { HTMLAttributes } from 'react';
import { GoPlus } from 'react-icons/go';
import { theme } from '../../styles/theme';
import { AddButtonContainer } from './styles';

type AddButtonProps = HTMLAttributes<HTMLButtonElement>

export const AddButton = ({ ...rest }: AddButtonProps): JSX.Element => (
  <AddButtonContainer type="button" {...rest}>
    <GoPlus size={32} color={theme.color.darkRed} />
  </AddButtonContainer>
);
