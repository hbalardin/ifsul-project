import { useEffect, useState } from 'react';

import quiz from '../../mocks/quiz.json';

import { Answer, Question, StepProps } from '../../models';
import {
  AnswerEditableCard, AnswersSidebar, Button, EditableTitle, StepsNavbar,
} from '../../components';

import { Container, Content } from './styles';

export const QuizDashboard = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const [steps, setSteps] = useState<StepProps[]>([]);

  const handleSelectAnswer = (answer: Answer): void => {
    if (answer.id === selectedAnswer?.id) {
      setSelectedAnswer(undefined);
      return;
    }

    setSelectedAnswer(answer);
  };

  const fetchQuizData = (): void => {
    const firstQuestion = quiz.data.questions[0];
    const firstAnswers = quiz.data.answers.filter((answer) => answer.questionId === firstQuestion.id);

    setCurrentQuestion(firstQuestion);
    setCurrentAnswers(firstAnswers);

    const firstSteps: StepProps[] = [
      { id: '1', questionId: firstQuestion.id },
    ];
    setSteps(firstSteps);
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <Container>
      <AnswersSidebar showSidebar />
      <Content>
        <header>
          <StepsNavbar steps={steps} />
        </header>
        <section>
          {currentQuestion && <EditableTitle size={32} centered title={currentQuestion.title} onChangeTitle={(title: string) => setCurrentQuestion({ ...currentQuestion, title })} />}
          <ul style={{ padding: 0 }}>
            {currentAnswers.map((answer) => (
              <AnswerEditableCard
                key={answer.id}
                title={answer.title}
                isSelected={answer.id === selectedAnswer?.id}
              />
            ))}
          </ul>
        </section>
        <footer>
          <Button onClick={() => undefined}>Salvar</Button>
        </footer>
      </Content>
    </Container>
  );
};
