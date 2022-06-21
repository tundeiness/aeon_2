/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { dashboardAPI } from '../services/dashboardAPI';
import institutionReducer from '../features/institutions/institutionSlice';

export const store = configureStore({
  reducer: {
    [dashboardAPI.reducerPath]: dashboardAPI.reducer,
    institution: institutionReducer,
  },
});
