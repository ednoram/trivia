import { combineReducers } from '@reduxjs/toolkit';

import questions from './questions/slice';

export const slices = combineReducers({
  questions,
});

export * from './questions';
