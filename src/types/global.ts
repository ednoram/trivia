import { ReactNode } from 'react';

export type DefaultChildrenType = ReactNode | ReactNode[] | string | string[];

export enum DifficultyLevels {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}
