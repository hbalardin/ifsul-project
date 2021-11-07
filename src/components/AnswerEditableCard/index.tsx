import { useState } from 'react';
import { GoArrowRight, GoChevronUp, GoPlusSmall } from 'react-icons/go';
import { EditableTitle } from '..';

import { theme } from '../../styles/theme';

import { Container, DescriptionContainer, NextQuestionContainer } from './styles';

interface AnswerEditableCardProps {
  title: string;
  nextQuestionId?: string
}

export const AnswerEditableCard = ({ title, nextQuestionId }: AnswerEditableCardProps): JSX.Element => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Container>
      <button
        type="button"
      >
        <header>
          <EditableTitle title={currentTitle} onChangeTitle={setCurrentTitle} />
        </header>
        <DescriptionContainer showDescription={showDescription}>
          <span>
            <button type="button" onClick={() => setShowDescription(!showDescription)}>
              <GoChevronUp size={24} color={theme.color.darkRed} />
            </button>
            Descrição:
          </span>
          <textarea cols={24} rows={8}>Oi</textarea>
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
