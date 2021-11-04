import { useState } from 'react';
import { GoArrowRight, GoChevronUp, GoPlusSmall } from 'react-icons/go';
import { EditableTitle } from '..';

import { theme } from '../../styles/theme';

import { Container, DescriptionContainer, NextQuestionContainer } from './styles';

interface AnswerEditableCardProps {
  editable?: boolean
  title: string;
  description: string;
  nextQuestionId?: string
  onChangeTitle?: (title: string) => void
  onChangeDescription?: (description: string) => void
}

export const AnswerEditableCard = ({
  editable, title, onChangeTitle, description, onChangeDescription, nextQuestionId,
}: AnswerEditableCardProps): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Container>
      <button
        type="button"
      >
        <header>
          <EditableTitle editable={editable} title={title} onChangeTitle={(newTitle) => onChangeTitle && onChangeTitle(newTitle)} />
        </header>
        <DescriptionContainer showDescription={showDescription}>
          <span>
            <button type="button" onClick={() => setShowDescription(!showDescription)}>
              <GoChevronUp size={24} color={theme.color.darkRed} />
            </button>
            Descrição:
          </span>
          <textarea cols={24} rows={8} value={description} onChange={(e) => onChangeDescription && onChangeDescription(e.target.value)}>{description}</textarea>
        </DescriptionContainer>
        <NextQuestionContainer>
          {nextQuestionId
            ? (
              <button type="button">
                Próxima pergunta:
                <GoArrowRight size={24} color={theme.color.white} />
              </button>
            )
            : (
              <button type="button">
                Criar pergunta:

                <GoPlusSmall size={24} color={theme.color.white} />
              </button>
            )}
        </NextQuestionContainer>
      </button>
    </Container>
  );
};
