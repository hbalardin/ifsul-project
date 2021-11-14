import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  answersService, questionsService, registersService, stepsService,
} from '../../services/api';
import { useEnsureAuth } from '../../hooks/useEnsureAuth';

import {
  Answer, Question, StepProps,
} from '../../models';
import { AnswerCard, AnswersSidebar, Button } from '../../components';

import { Container, Content, Header } from './styles';

interface QuizPageProps {
  preview?: boolean
}

export const QuizPage = ({ preview }: QuizPageProps): JSX.Element => {
  useEnsureAuth(!preview);
  const history = useHistory();

  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const [quizHasFinished, setQuizHasFinished] = useState(false);

  const [currentStep, setCurrentStep] = useState<StepProps>();

  const handleCreateStep = async (questionId: string, registerId: string): Promise<void> => {
    const newStep = await stepsService.createStep({ questionId, registerId });
    setCurrentStep(newStep);
  };

  const startQuiz = async (): Promise<void> => {
    const questionsResponse = await questionsService.getQuestions();
    const firstQuestion = questionsResponse.find((question) => !question.linkedAnswerId);
    if (!firstQuestion) return;

    const firstAnswersResponse = await answersService.getAnswersByQuestion({ questionId: firstQuestion.id });

    setCurrentQuestion(firstQuestion);
    setCurrentAnswers(firstAnswersResponse);
    setQuizHasFinished(false);

    if (preview) return;

    const createdRegister = await registersService.startRegister();
    handleCreateStep(firstQuestion.id, createdRegister.id);
  };

  const handleSelectAnswer = (answer: Answer): void => {
    if (answer.id === selectedAnswer?.id) {
      setSelectedAnswer(undefined);
      return;
    }

    setSelectedAnswer(answer);
  };

  const handlePreviousQuestion = async (): Promise<void> => {
    if (!currentQuestion) return;

    const previousQuestionResponse = await questionsService.getPreviousQuestion({ currentQuestionId: currentQuestion.id });
    const previousQuestionAnswersResponse = await answersService.getAnswersByQuestion({ questionId: previousQuestionResponse.id });

    setCurrentQuestion(previousQuestionResponse);
    setCurrentAnswers(previousQuestionAnswersResponse);

    if (currentStep) {
      const updatedStep = await stepsService.undoStep({ stepId: currentStep.id });
      setCurrentStep(updatedStep);
    }
  };

  const handleNextQuestion = async (): Promise<void> => {
    if (!selectedAnswer) return;

    if (currentStep) {
      const updatedStep = await stepsService.linkAnswerToStep({ stepId: currentStep.id, answerId: selectedAnswer.id });
      setCurrentStep(updatedStep);
    }

    if (!selectedAnswer?.linkedQuestionId) {
      setQuizHasFinished(true);
      return;
    }

    const nextQuestion = await questionsService.getQuestionById({ id: selectedAnswer.linkedQuestionId });
    const nextAnswers = await answersService.getAnswersByQuestion({ questionId: selectedAnswer.linkedQuestionId });

    setCurrentQuestion(nextQuestion);
    setCurrentAnswers(nextAnswers);
    setSelectedAnswer(undefined);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <Container>
      <AnswersSidebar answer={selectedAnswer} showSidebar={!!selectedAnswer && !quizHasFinished} />
      <section>
        <Header>
          {!quizHasFinished && <Button disabled={!currentQuestion?.linkedAnswerId} onClick={handlePreviousQuestion}>Pergunta anterior</Button>}
          {preview && <Button onClick={() => history.push('/quiz/management')}>Gerenciar</Button>}
        </Header>
        <Content>
          <header>
            <h1>{quizHasFinished ? 'Quiz finalizado!' : currentQuestion?.title}</h1>
          </header>
          <section>
            {quizHasFinished
              ? (
                <p>
                  Se tiver interesse, informe seu WhatsApp.
                  <br />
                  Entraremos em contato assim que possível.
                </p>
              )
              : (
                <ul style={{ padding: 0 }}>
                  {currentAnswers.map((answer) => (
                    <AnswerCard
                      key={answer.id}
                      title={answer.title}
                      isSelected={answer.id === selectedAnswer?.id}
                      onClick={() => handleSelectAnswer(answer)}
                    />
                  ))}
                </ul>
              )}
          </section>
          <footer>
            {quizHasFinished
              ? <Button onClick={startQuiz}>Reiniciar</Button>
              : <Button disabled={!selectedAnswer} onClick={handleNextQuestion}>Próximo</Button>}
          </footer>
        </Content>
      </section>
    </Container>
  );
};
