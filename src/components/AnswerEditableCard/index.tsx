import { useState } from 'react';
import { GoLaw } from 'react-icons/go';
import { EditableTitle } from '..';

import { theme } from '../../styles/theme';

import { Container } from './styles';

interface AnswerEditableCardProps {
  title: string;
  isSelected: boolean
}

export const AnswerEditableCard = ({ title, isSelected }: AnswerEditableCardProps): JSX.Element => {
  const [currentTitle, setCurrentTitle] = useState(title);

  return (
    <Container
      isSelected={isSelected}
    >
      <button
        type="button"
        // onClick={handleClick}
      >
        <GoLaw size={88} color={theme.color.darkRed} />
        <EditableTitle centered title={currentTitle} onChangeTitle={setCurrentTitle} />
      </button>
    </Container>
  );
};
