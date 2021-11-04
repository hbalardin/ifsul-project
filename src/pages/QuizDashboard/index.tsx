import { useEffect, useState } from 'react';

import { answersService, questionsService } from '../../services/api';

import { Answer, Question } from '../../models';
import {
  AddButton, AnswerEditableCard, Button, EditableTitle,
} from '../../components';

import { Container, ButtonsContainer, Content } from './styles';

export const QuizDashboard = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);

  const [questionToCreate, setQuestionToCreate] = useState<Omit<Question, 'id'>>();
  const [answerToCreate, setAnswerToCreate] = useState<Omit<Answer, 'id'>>();

  const fetchQuizData = async (): Promise<void> => {
    const questionsResponse = await questionsService.getQuestions();
    const firstQuestion = questionsResponse.find((question) => !question?.linkedAnswerId);

    if (!firstQuestion) return;

    const firstAnswers = await answersService.getAnswersByQuestion({ questionId: firstQuestion.id });

    setCurrentQuestion(firstQuestion);
    setCurrentAnswers(firstAnswers);
  };

  const handleCreateQuestion = async (): Promise<void> => {
    if (!questionToCreate?.title) return;

    const createdQuestion = await questionsService.createQuestion(questionToCreate);
    setCurrentQuestion(createdQuestion);
  };

  const handleCreateAnswerCard = (): void => {
    if (answerToCreate || !currentQuestion) return;

    setAnswerToCreate({ title: 'Título padrão', description: 'Descrição padrão.', questionId: currentQuestion.id });
  };

  const handleClearAnswerT = (): void => {
    setAnswerToCreate(undefined);
  };

  const handleSaveAnswer = async (): Promise<void> => {
    if (!answerToCreate) return;

    const createdAnswer = await answersService.createAnswer(answerToCreate);
    console.log('🚀 ~ file: index.tsx ~ line 52 ~ handleSaveAnswer ~ createdAnswer', createdAnswer);
    setCurrentAnswers([...currentAnswers, createdAnswer]);
    handleClearAnswerT();
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <Container>
      <Content>
        {currentQuestion ? (
          <>
            <EditableTitle size={32} centered title={currentQuestion.title} onChangeTitle={(title: string) => setCurrentQuestion({ ...currentQuestion, title })} />
            <ul style={{ padding: 0 }}>
              {currentAnswers.map((answer) => (
                <AnswerEditableCard
                  key={answer.id}
                  title={answer.title}
                  description={answer.description}
                />
              ))}
              {answerToCreate ? (
                <AnswerEditableCard
                  editable
                  title={answerToCreate.title}
                  description={answerToCreate.description}
                  onChangeTitle={(title) => setAnswerToCreate({ ...answerToCreate, title })}
                  onChangeDescription={(description) => setAnswerToCreate({ ...answerToCreate, description })}
                />
              ) : (
                <AddButton onClick={handleCreateAnswerCard} />
              )}
            </ul>
            {answerToCreate && (
            <ButtonsContainer>
              <Button onClick={handleClearAnswerT}>Cancelar</Button>
              <Button onClick={handleSaveAnswer}>Salvar resposta</Button>
            </ButtonsContainer>
            )}
          </>
        ) : (
          <>
            <EditableTitle size={32} centered title={questionToCreate?.title} placeholder="Título da sua primeira pergunta!" onChangeTitle={(title: string) => setQuestionToCreate({ title })} />
            <ButtonsContainer>
              <Button onClick={handleCreateQuestion}>Criar</Button>
            </ButtonsContainer>
          </>

        )}
      </Content>
    </Container>
  );
};
