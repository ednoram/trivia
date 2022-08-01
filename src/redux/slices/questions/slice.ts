import { createSlice } from '@reduxjs/toolkit';

import { Answer, IQuestion } from '~/types';

import { ReducerNames } from '../../types';
import * as questionsThunks from './thunks';
import { AnswerPayload } from './types';

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
    answerQuestion(state: QuestionsState, { payload }: { payload: AnswerPayload }) {
      const question = state.questions[payload.questionIndex];
      const isAnswerCorrect = question?.correct_answer === payload.answer;
      state.answers.push({ ...payload, isCorrect: isAnswerCorrect });
      state.currentQuestionIndex++;
    },
    resetQuestionsState() {
      return initialState;
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
