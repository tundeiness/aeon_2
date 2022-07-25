/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const THIRD_PARTY_CONNECTION_URL = 'http://13.59.94.46/aeon/api/v1/ThirdPartyConnectionMonitor';

export const getConnection = createAsyncThunk(
  'connection/getConnection',
  async () => {
    try {
      const response = await axios.get(THIRD_PARTY_CONNECTION_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  connection: [],
  status: 'idle',
  error: null,
};

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getConnection.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getConnection.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.connection = action.payload;
      })
      .addCase(getConnection.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});
export const selectAllConnections = (state) => state.connection.connection;
export const getConnectionStatus = (state) => state.connection.status;
export const getConnectionError = (state) => state.connection.error;
export default connectionSlice.reducer;
