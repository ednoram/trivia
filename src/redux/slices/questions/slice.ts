import { createSlice } from '@reduxjs/toolkit';

import { IQuestion } from '~/types';

import { ReducerNames } from '../../types';
import * as questionsThunks from './thunks';

type QuestionsState = {
  questions: IQuestion[];
};

const initialState: QuestionsState = {
  questions: [],
};

const questionsSlice = createSlice({
  name: ReducerNames.Questions,
  initialState,
  reducers: {},
  extraReducers: {
    [questionsThunks.getQuestions.fulfilled.type]: (
      state,
      { payload }: { payload: IQuestion[] }
    ) => {
      state.questions = payload;
    },
  },
});

export const questionsActions = {
  ...questionsThunks,
  ...questionsSlice.actions,
};

export default questionsSlice.reducer;
