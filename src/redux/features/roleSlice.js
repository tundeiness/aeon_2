/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_ALL_ROLES_URL = 'http://13.59.94.46/api/v1/GetAlRoles';

export const getAllRoles = createAsyncThunk(
  'role/getAllRoles',
  async () => {
    try {
      const response = await axios.get(GET_ALL_ROLES_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    roleInfo: {
      description: 'This Role is a User Role',
      status: 'Active',
      code: '004',
      id: '7179b718-4c94-49bf-a6fe-1eb2cdc82530',
      name: 'User',
      normalizedName: 'USER',
      concurrencyStamp: 'f165e0b8-440e-446b-a5b4-d28a70cb5361',
    },
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAllRoles.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAllRoles.fulfilled]: (state, action) => {
      state.pending = true;
      state.userInfo = action.payload;
    },
    [getAllRoles.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default roleSlice.reducer;
