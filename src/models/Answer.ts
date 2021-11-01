export interface Answer {
  id: string;
  title: string;
  description: string;
  questionId: string
  nextQuestionId?: string;
}
