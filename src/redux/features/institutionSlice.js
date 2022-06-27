/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInstitution = createAsyncThunk('institution/getInstitution', async (_id) => fetch('http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll').then((res) => res.json()));

export const getAllInstitutions = createAsyncThunk(
  'institution/getInstitution', async (_arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll');
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const deleteInstitution = createAsyncThunk(
  'institution/deleteInstitution',
  async (code) => fetch(
    `http://13.59.94.46/aeon/api/v1/Institution/EnableDisable?code=${code}`,
    {
      method: 'DELETE',
    },
  ).then((res) => res.json()),
);

export const createInstitution = createAsyncThunk(
  'institution/createInstitution',
  async ({ values }) => fetch('http://13.59.94.46/aeon/api/v1/Institution/Create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: values.title,
      body: values.body,
    }),
  }).then((res) => res.json()),
);

export const updateInstitution = createAsyncThunk(
  'institution/updateInstitution',
  async ({ id, body, title }) => fetch(
    `http://13.59.94.46/aeon/api/v1/Institution/EnableDisable${id}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    },
  ).then((res) => res.json()),
);

const institutionSlice = createSlice({
  name: 'institution', // sliceName:
  initialState: {
    institution: [],
    loading: false,
    error: null,
    edit: false,
    body: '',
  },

  reducers: {
    setUpdate: (state, action) => {
      state.edit = action.payload.edit;
      state.body = action.payload.body;
    },
  },

  extraReducers: {
    [getInstitution.pending]: (state) => {
      state.loading = true;
    },
    [getInstitution.fulfilled]: (state, action) => {
      state.loading = false;
      state.institution = [action.payload];
    },
    [getInstitution.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteInstitution.pending]: (state) => {
      state.loading = true;
    },
    [deleteInstitution.fulfilled]: (state, action) => {
      state.loading = false;
      state.institution = action.payload;
    },
    [deleteInstitution.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createInstitution.pending]: (state) => {
      state.loading = true;
    },
    [createInstitution.fulfilled]: (state, action) => {
      state.loading = false;
      state.institution = [action.payload];
    },
    [createInstitution.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateInstitution.pending]: (state) => {
      state.loading = true;
    },
    [updateInstitution.fulfilled]: (state, action) => {
      state.loading = false;
      state.institution = [action.payload];
    },
    [updateInstitution.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getAllInstitutions.pending]: (state) => {
      state.loading = true;
    },
    [getAllInstitutions.fulfilled]: (state, action) => {
      state.loading = false;
      state.institution = [action.payload];
    },
    [getAllInstitutions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUpdate } = institutionSlice.actions;
export default institutionSlice.reducer;
