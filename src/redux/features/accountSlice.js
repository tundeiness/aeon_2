/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DAILY_UTILIZATION_URL = 'http://13.59.94.46/aeon/api/v1/Account/DailyUtilization';
const DAILY_UTILIZATION_BREAKDOWN_URL = 'http://13.59.94.46/aeon/api/v1/Account/DailyUtilizationBreakdown';

export const dailyUtilization = createAsyncThunk(
  'account/dailyUtilization',
  async (institutionCode, { rejectWithValue }) => {
    try {
      const response = await axios.post(DAILY_UTILIZATION_URL, institutionCode);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  account: [],
  status: 'idle',
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(dailyUtilization.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(dailyUtilization.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.account = action.payload;
      })
      .addCase(dailyUtilization.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const dailyInstitutionUtilization = (state) => state.account.account;
export const dailyUtilizationStatus = (state) => state.account.status;
export const dailyUtilizationError = (state) => state.account.error;

export default accountSlice.reducer;
