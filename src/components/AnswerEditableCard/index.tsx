import { useState } from 'react';
import { GoArrowRight, GoChevronUp, GoPlusSmall } from 'react-icons/go';
import { EditableTitle } from '..';
import { Answer } from '../../models';

import { theme } from '../../styles/theme';

import { Container, DescriptionContainer, NextQuestionContainer } from './styles';

interface AnswerEditableCardProps {
  editable?: boolean
  title: string;
  description: string;
  nextQuestionId?: string
  handleCreateQuestion?: () => void
  handleGoToNextQuestion?: () => void
  handleChangeAnswerData?: (newData: Partial<Answer>) => void
}

export const AnswerEditableCard = ({
  editable, title, description, nextQuestionId, handleCreateQuestion, handleGoToNextQuestion, handleChangeAnswerData,
}: AnswerEditableCardProps): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Container>
      <header>
        <EditableTitle editable={editable} title={title} onChangeTitle={(newTitle) => handleChangeAnswerData && handleChangeAnswerData({ title: newTitle })} />
      </header>
      <DescriptionContainer showDescription={showDescription}>
        <span>
          <button type="button" onClick={() => setShowDescription(!showDescription)}>
            <GoChevronUp size={24} color={theme.color.darkRed} />
          </button>
          Descrição:
        </span>
        <textarea cols={24} rows={8} value={description} onChange={(e) => handleChangeAnswerData && handleChangeAnswerData({ description: e.target.value })}>{description}</textarea>
      </DescriptionContainer>
      <NextQuestionContainer>
        {nextQuestionId
          ? (
            <button type="button" onClick={handleGoToNextQuestion}>
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
    </Container>
  );
};
