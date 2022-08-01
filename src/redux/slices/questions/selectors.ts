import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectQuestionsState = (state: RootState) => state.questions;

export const selectQuestions = createSelector(selectQuestionsState, (state) => state.questions);

export const selectCurrentQuestionIndex = createSelector(
  selectQuestionsState,
  (state) => state.currentQuestionIndex
);

export const selectAnswers = createSelector(selectQuestionsState, (state) => state.answers);

export const selectQuestionsCount = createSelector(
  selectQuestionsState,
  (state) => state.questions.length
);

export const selectCorrectAnswersCount = createSelector(
  selectQuestionsState,
  selectAnswers,
  (_state, answers) => {
    return answers.filter((answer) => answer.isCorrect).length;
  }
);
