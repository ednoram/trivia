import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { QuestionsApiUrl } from '~/constants';
import { IQuestionsResponse, QuestionsRequestParams } from '~/types';

import { QuestionsActionPrefixes } from './constants';

export const getQuestions = createAsyncThunk(
  QuestionsActionPrefixes.GetQuestions,
  async ({ difficulty, amount }: QuestionsRequestParams) => {
    const { data } = await axios.get<IQuestionsResponse>(QuestionsApiUrl, {
      params: { amount, difficulty, type: 'boolean' },
    });

    return data.results;
  }
);
