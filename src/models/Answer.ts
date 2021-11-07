export interface Answer {
  id: string;
  title: string;
  description: string;
  questionId: string
  linkedQuestionId?: string;
}
export interface DatabaseAnswer {
  id: string;
  title: string;
  description: string;
  question_id: string
  linked_question_id: string
}
