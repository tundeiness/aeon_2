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

const initialState = {
  role: [],
  status: 'idle',
  error: null,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,

  // : {
  //   roleInfo: {
  //     description: 'This Role is a User Role',
  //     status: 'Active',
  //     code: '004',
  //     id: '7179b718-4c94-49bf-a6fe-1eb2cdc82530',
  //     name: 'User',
  //     normalizedName: 'USER',
  //     concurrencyStamp: 'f165e0b8-440e-446b-a5b4-d28a70cb5361',
  //   },
  //   pending: false,
  //   error: false,
  // },
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
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllRoles = (state) => state.role.role;
export const getRoleStatus = (state) => state.role.status;
export const getRoleError = (state) => state.role.error;

export default roleSlice.reducer;
