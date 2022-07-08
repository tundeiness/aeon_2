/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SIGN_IN = 'http://13.59.94.46/aeon/api/v1/SignIn';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// register user
// export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
//   try {
//     return await authService.register(user);
//   } catch (error) {
//     const message = (error.response && error.response.data.message && error.response.data) || error.message || error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// login user
// export const login = createAsyncThunk(
//   'auth/login',
//   async (user, thunkAPI) => {
//     try {
//       return await authService.register(user);
//     } catch (error) {
//       const message = (error.response
//           && error.response.data.message
//           && error.response.data)
//         || error.message
//         || error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   },
// );

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post(
      SIGN_IN, user,
    );
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data.message && error.response.data)
      || error.message
      || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      // .addCase(register.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(register.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.user = action.payload;
      // })
      // .addCase(register.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      //   state.user = null;
      // })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default AuthSlice.reducer;
