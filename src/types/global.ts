import { ReactNode } from 'react';

export type DefaultChildrenType = ReactNode | ReactNode[] | string | string[];

export enum DifficultyLevels {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum AnswerOptions {
  True = 'True',
  False = 'False',
}

export type Answer = {
  answer: AnswerOptions;
  questionIndex: number;
};
