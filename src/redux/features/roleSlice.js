/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_ALL_ROLES_URL = 'http://13.59.94.46/api/v1/GetAlRoles';

export const getAllRoles = createAsyncThunk(
  'role/getAllRoles',
  async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',

      // crossorigin: 'true',
      // Authorization: 'JWT fefege...',
    };
    try {
      const response = await axios.get(GET_ALL_ROLES_URL, { headers });
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  role: [],
  status: 'idle',
  error: null,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllRoles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.role = action.payload;
      })
      .addCase(getAllRoles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllRoles = (state) => state.role.role;
export const getRoleStatus = (state) => state.role.status;
export const getRoleError = (state) => state.role.error;

export default roleSlice.reducer;
