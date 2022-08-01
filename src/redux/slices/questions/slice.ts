import { createSlice } from '@reduxjs/toolkit';

import { Answer, IQuestion } from '~/types';

import { ReducerNames } from '../../types';
import * as questionsThunks from './thunks';

type QuestionsState = {
  answers: Answer[];
  questions: IQuestion[];
  currentQuestionIndex: number;
};

const initialState: QuestionsState = {
  answers: [],
  questions: [],
  currentQuestionIndex: 0,
};

const questionsSlice = createSlice({
  name: ReducerNames.Questions,
  initialState,
  reducers: {
    answerQuestion(state: QuestionsState, { payload }: { payload: Answer }) {
      state.answers.push(payload);
      state.currentQuestionIndex++;
    },
  },
  extraReducers: {
    [questionsThunks.getQuestions.fulfilled.type]: (
      state,
      { payload }: { payload: IQuestion[] }
    ) => {
      state.questions = payload;
      state.answers = [];
      state.currentQuestionIndex = 0;
    },
  },
});

export const questionsActions = {
  ...questionsThunks,
  ...questionsSlice.actions,
};

export default questionsSlice.reducer;
