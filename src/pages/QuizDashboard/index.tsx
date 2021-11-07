import { useEffect, useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

import { answersService, questionsService } from '../../services/api';

import { Answer, Question } from '../../models';
import {
  AddButton, AnswerEditableCard, Button, DashboardSidebar, EditableTitle, IconButton,
} from '../../components';

import { Container, ButtonsContainer, Content } from './styles';
import { theme } from '../../styles/theme';

export const QuizDashboard = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);

  const [questionToCreate, setQuestionToCreate] = useState<Omit<Question, 'id'>>();
  const [answerToCreate, setAnswerToCreate] = useState<Omit<Answer, 'id'>>();
  const [answerValueBeforeUpdate, setAnswerValueBeforeChange] = useState<Partial<Answer>>();
  const [questionValueBeforeUpdate, setQuestionValueBeforeChange] = useState<Question>();

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

  const handleClearAnswerToCreate = (): void => {
    setAnswerToCreate(undefined);
  };

  const handleSaveAnswer = async (): Promise<void> => {
    if (!answerToCreate) return;

    const createdAnswer = await answersService.createAnswer(answerToCreate);
    setCurrentAnswers([...currentAnswers, createdAnswer]);
    handleClearAnswerToCreate();
  };

  const handleChangeAnswerData = (answerValues: Partial<Answer>, newAnswerValues: Partial<Answer>): void => {
    if (!answerValueBeforeUpdate) {
      setAnswerValueBeforeChange(answerValues);
    } else if (answerValues.id !== answerValueBeforeUpdate?.id) {
      alert('Before edit another answer you need to save or discard your changes.');
      return;
    }

    const updatedAnswer = {
      ...answerValues,
      ...newAnswerValues,
    };

    const arrayCopy = [...currentAnswers];
    const answerIndex = arrayCopy.findIndex((answer) => answer.id === updatedAnswer.id);
    const deleteCount = 1;

    arrayCopy.splice(answerIndex, deleteCount, updatedAnswer as Answer);

    setCurrentAnswers(arrayCopy);
  };

  const handleDiscardAnswerChanges = (): void => {
    if (!answerValueBeforeUpdate) return;

    const arrayCopy = [...currentAnswers];
    const answerIndex = arrayCopy.findIndex((answer) => answer.id === answerValueBeforeUpdate.id);
    const deleteCount = 1;

    arrayCopy.splice(answerIndex, deleteCount, answerValueBeforeUpdate as Answer);

    setCurrentAnswers(arrayCopy);
    setAnswerValueBeforeChange(undefined);
  };

  const handleSaveAnswerChanges = async (): Promise<void> => {
    if (!answerValueBeforeUpdate) return;

    const updatedAnswer = currentAnswers.find((answer) => answer.id === answerValueBeforeUpdate?.id);

    updatedAnswer && await answersService.updateAnswer(updatedAnswer);

    setAnswerValueBeforeChange(undefined);
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const handleQuestionChangeTitle = (title: string): void => {
    if (!questionValueBeforeUpdate) setQuestionValueBeforeChange(currentQuestion);

    if (!currentQuestion) return;
    setCurrentQuestion({ ...currentQuestion, title });
  };

  const handleDiscardQuestionChanges = (): void => {
    if (!questionValueBeforeUpdate) return;

    setCurrentQuestion(questionValueBeforeUpdate);
    setQuestionValueBeforeChange(undefined);
  };

  const handleSaveQuestionChanges = async (): Promise<void> => {
    if (!questionValueBeforeUpdate) return;

    currentQuestion && await questionsService.updateQuestion(currentQuestion);

    setQuestionValueBeforeChange(undefined);
  };

  const handleGoToNextQuestion = async (id: string): Promise<void> => {
    const nextQuestionResponse = await questionsService.getQuestionById({ id });
    const nextQuestionAnswersResponse = await answersService.getAnswersByQuestion({ questionId: id });

    setCurrentQuestion(nextQuestionResponse);
    setCurrentAnswers(nextQuestionAnswersResponse);
  };

  const handleCreateNextQuestion = async (answer: Answer): Promise<void> => {
    const createdQuestionResponse = await questionsService.createQuestionFromAnswer({ linkedAnswerId: answer.id, title: `Pergunta para a resposta "${answer.title}"` });
    handleGoToNextQuestion(createdQuestionResponse.id);
  };

  return (
    <Container>
      <DashboardSidebar />
      <Content>
        {currentQuestion ? (
          <>
            <header>
              <EditableTitle size={32} centered title={currentQuestion.title} onChangeTitle={handleQuestionChangeTitle} />
              {questionValueBeforeUpdate && (
              <>
                <IconButton onClick={handleDiscardQuestionChanges}><FaTimes size={16} color={theme.color.white} /></IconButton>
                <IconButton onClick={handleSaveQuestionChanges}><FaCheck size={16} color={theme.color.white} /></IconButton>
              </>
              )}
            </header>
            <ul style={{ padding: 0 }}>
              {currentAnswers.map((answer) => (
                <AnswerEditableCard
                  key={answer.id}
                  title={answer.title}
                  description={answer.description}
                  nextQuestionId={answer?.linkedQuestionId}
                  handleCreateQuestion={() => handleCreateNextQuestion(answer)}
                  handleGoToNextQuestion={() => handleGoToNextQuestion(answer.id)}
                  handleChangeAnswerData={(newAnswerValues) => handleChangeAnswerData(answer, newAnswerValues)}
                />
              ))}
              {answerToCreate ? (
                <AnswerEditableCard
                  editable
                  title={answerToCreate.title}
                  description={answerToCreate.description}
                />
              ) : (
                <AddButton onClick={handleCreateAnswerCard} />
              )}
            </ul>
            {answerToCreate && (
            <ButtonsContainer>
              <Button onClick={handleClearAnswerToCreate}>Cancelar</Button>
              <Button onClick={handleSaveAnswer}>Criar</Button>
            </ButtonsContainer>
            )}
            {answerValueBeforeUpdate && (
            <ButtonsContainer>
              <Button onClick={handleDiscardAnswerChanges}>Descartar alteração</Button>
              <Button onClick={handleSaveAnswerChanges}>Salvar alterações</Button>
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
