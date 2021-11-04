import { useEffect, useState } from 'react';

import quiz from '../../mocks/quiz.json';

import { Answer, Question } from '../../models';
import { AnswerCard, AnswersSidebar, Button } from '../../components';

import { Container, Content } from './styles';

export const Quiz = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const [quizHasFinished, setQuizHasFinished] = useState(false);

  const startQuiz = (): void => {
    const firstQuestion = quiz.data.questions[0];
    const firstAnswers = quiz.data.answers.filter((answer) => answer.questionId === firstQuestion.id);

    // setCurrentQuestion(firstQuestion);
    // setCurrentAnswers(firstAnswers);
    // setQuizHasFinished(false);
  };

  const handleSelectAnswer = (answer: Answer): void => {
    if (answer.id === selectedAnswer?.id) {
      setSelectedAnswer(undefined);
      return;
    }

    setSelectedAnswer(answer);
  };

  const handleNextQuestion = (): void => {
    // if (!selectedAnswer?.nextQuestionId) {
    //   setQuizHasFinished(true);
    //   return;
    // }

    // const nextQuestion = quiz.data.questions.find((question) => question.id === selectedAnswer.nextQuestionId);
    // const nextAnswers = quiz.data.answers.filter((answer) => answer.questionId === selectedAnswer.nextQuestionId);

    // setCurrentQuestion(nextQuestion);
    // setCurrentAnswers(nextAnswers);
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
