/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const updateUser = createAsyncThunk('users/update', async (user) => {
  const res = await axios.post(
    'http://13.59.94.46/aeon/api/v1/Institution/EnableDisable',
    user,
  );
  return res.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      name: 'john',
      email: 'john@rocketmail.com',
    },
    pending: false,
    error: false,
  },
  reducers: {
    setuserUpdate: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => {
      state = null;
    },
    updateStart: (...state) => {
      state.pending = true;
    },
    updateSuccess: ({ ...state }, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (...state) => {
      state.error = true;
      state.pending = false;
    },
  },
  //  using create async thunk
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.pending = true;
      state.userInfo = action.payload;
    },
    [updateUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {
  setUserUpdate, remove, updateStart, updateSuccess, updateError,
} = userSlice.actions;
export default userSlice.reducer;
