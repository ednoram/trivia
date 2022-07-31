import { AnswerOptions, DifficultyLevels } from './global';

export interface IQuestion {
  type: string;
  category: string;
  question: string;
  difficulty: DifficultyLevels;
  correct_answer: AnswerOptions;
  incorrect_answers: AnswerOptions[];
}

export type QuestionsRequestParams = {
  amount: number;
  difficulty: DifficultyLevels;
};

export interface IQuestionsResponse {
  results: IQuestion[];
  response_code: number;
}
