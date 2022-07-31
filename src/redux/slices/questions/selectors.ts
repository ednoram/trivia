import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

export const selectQuestionsState = (state: RootState) => state.questions;

export const selectQuestions = createSelector(selectQuestionsState, (state) => state.questions);
