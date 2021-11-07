export interface Question {
  id: string;
  title: string;
  linkedAnswerId?: string
}
export interface DatabaseQuestion {
  id: string;
  title: string;
  linked_answer_id?: string
}
