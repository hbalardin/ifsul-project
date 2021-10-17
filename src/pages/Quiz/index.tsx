import { useEffect, useState } from 'react';
import { AnswerCard } from '../../components';
import quiz from '../../mocks/quiz.json';

interface Question {
  id: string;
  title: string;
}

interface Answer {
  id: string;
  title: string;
  description: string;
  questionId: string
  nextQuestionId?: string;
}

export const Quiz = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = (): void => {
    const firstQuestion = quiz.data.questions[0];
    const firstAnswers = quiz.data.answers.filter((answer) => answer.questionId === firstQuestion.id);

    setCurrentQuestion(firstQuestion);
    setCurrentAnswers(firstAnswers);
    setShowResults(false);
  };

  const handleSelectAnswer = (nextQuestionId?: string): void => {
    if (!nextQuestionId) {
      setShowResults(true);
      return;
    }

    const nextQuestion = quiz.data.questions.find((question) => question.id === nextQuestionId);
    const nextAnswers = quiz.data.answers.filter((answer) => answer.questionId === nextQuestionId);

    setCurrentQuestion(nextQuestion);
    setCurrentAnswers(nextAnswers);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <main>
      {showResults
        ? (
          <>
            <h1>Quiz finalizado!</h1>
            <button onClick={startQuiz} type="button">Reiniciar</button>
          </>
        )
        : (
          <>
            <h1>{currentQuestion?.title}</h1>
            <div>
              <ul style={{ padding: 0 }}>
                {currentAnswers.map((answer) => (
                  <AnswerCard
                    key={answer.id}
                    title={answer.title}
                    description={answer.description}
                    onClick={() => handleSelectAnswer(answer.nextQuestionId)}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
    </main>
  );
};
