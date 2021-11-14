export interface StepProps {
  id: string
  registerId: string;
  questionId: string;
  answerId?: string;
  nextStepId?: string;
}
export interface DatabaseStep {
  id: string
  register_id: string;
  question_id: string;
  answer_id?: string;
  next_step_id?: string;
}
