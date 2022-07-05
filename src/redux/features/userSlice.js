/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_ALL_USER_URL = 'http://13.59.94.46/aeon/api/v1/GetUsers';
const NEW_USER_URL = 'http://13.59.94.46/aeon/api/v1/GetUsers';

export const getAllUsers = createAsyncThunk(
  'user/getUsers',
  async () => {
    try {
      const response = await axios.get(GET_ALL_USER_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ userData }, thunkAPI) => {
    const {
      firstName, lastName, phone, institution, email, role,
    } = userData;

    const newUserData = {
      firstName,
      lastName,
      phone,
      institution,
      email,
      role,
    };

    // const token = thunkAPI.getState().auth.user.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        NEW_USER_URL,
        {
          user: newUserData,
        },
        config,
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const getUsers = createAsyncThunk('user/getUsers', async () => fetch('http://13.59.94.46/aeon/api/v1/GetUsers').then((res) => res.json()));

export const getActiveUsers = createAsyncThunk('user/getActiveUsers', async () => fetch('http://13.59.94.46/aeon/api/v1/GetActiveUser').then((res) => res.json()));

export const getInActiveUsers = createAsyncThunk('user/getInActiveUsers', async () => fetch('http://13.59.94.46/aeon/api/v1/GetInActiveUser').then((res) => res.json()));

export const loginUser = createAsyncThunk('user/login', async (user) => {
  const res = await axios.post(
    'http://13.59.94.46/aeon/api/v1/Institution/EnableDisable',
    user,
  );
  return res.data;
});

export const updateUser = createAsyncThunk('users/update', async (user) => {
  const res = await axios.post(
    'http://13.59.94.46/aeon/api/v1/EditUser',
    user,
  );
  return res.data;
});

const initialState = {
  user: [],
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // initialState: {
  //   userInfo: {
  //     name: 'john',
  //     email: 'john@rocketmail.com',
  //   },
  //   pending: false,
  //   error: false,
  // },
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
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const user = action.payload;
        // state.entities[institution.id] = institution;
        state.user[user.id] = user;
        state.user.push(user);
      });
    // [updateUser.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [updateUser.fulfilled]: (state, action) => {
    //   state.pending = true;
    //   state.userInfo = action.payload;
    // },
    // [updateUser.rejected]: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },

    // [loginUser.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [loginUser.fulfilled]: (state, action) => {
    //   state.pending = true;
    //   state.userInfo = action.payload;
    // },
    // [loginUser.rejected]: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
    // [getUsers.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [getUsers.fulfilled]: (state, action) => {
    //   state.pending = true;
    //   state.userInfo = action.payload;
    // },
    // [getUsers.rejected]: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
    // [getActiveUsers.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [getActiveUsers.fulfilled]: (state, action) => {
    //   state.pending = true;
    //   state.userInfo = action.payload;
    // },
    // [getActiveUsers.rejected]: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
    // [getInActiveUsers.pending]: (state) => {
    //   state.pending = true;
    //   state.error = false;
    // },
    // [getInActiveUsers.fulfilled]: (state, action) => {
    //   state.pending = true;
    //   state.userInfo = action.payload;
    // },
    // [getInActiveUsers.rejected]: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
  },
});

export const selectAllUsers = (state) => state.user.user;
export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;

export const {
  setUserUpdate, remove, updateStart, updateSuccess, updateError,
} = userSlice.actions;

export default userSlice.reducer;
