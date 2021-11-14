import { useEffect, useState } from 'react';

import { Answer, Question } from '../../models';
import { AnswerCard, AnswersSidebar, Button } from '../../components';

import { Container, Content } from './styles';
import { answersService, questionsService } from '../../services/api';

export const QuizPage = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const [quizHasFinished, setQuizHasFinished] = useState(false);

  const startQuiz = async (): Promise<void> => {
    const questionsResponse = await questionsService.getQuestions();
    const firstQuestion = questionsResponse.find((question) => !question.linkedAnswerId);
    if (!firstQuestion) return;

    const firstAnswersResponse = await answersService.getAnswersByQuestion({ questionId: firstQuestion.id });

    setCurrentQuestion(firstQuestion);
    setCurrentAnswers(firstAnswersResponse);
    setQuizHasFinished(false);
  };

  const handleSelectAnswer = (answer: Answer): void => {
    if (answer.id === selectedAnswer?.id) {
      setSelectedAnswer(undefined);
      return;
    }

    setSelectedAnswer(answer);
  };

  const handleNextQuestion = async (): Promise<void> => {
    if (!selectedAnswer?.linkedQuestionId) {
      setQuizHasFinished(true);
      return;
    }

    const nextQuestion = await questionsService.getQuestionById({ id: selectedAnswer.linkedQuestionId });
    const nextAnswers = await answersService.getAnswersByQuestion({ questionId: selectedAnswer.linkedQuestionId });

    setCurrentQuestion(nextQuestion);
    setCurrentAnswers(nextAnswers);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <Container>
      <AnswersSidebar answer={selectedAnswer} showSidebar={!!selectedAnswer && !quizHasFinished} />
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
            : <Button onClick={handleNextQuestion}>Próximo</Button>}
        </footer>
      </Content>
    </Container>
  );
};
