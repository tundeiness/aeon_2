/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const NEW_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/Create';
const EDIT_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/Create';
const DELETE_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/Create';
const GET_ALL_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll';

export const getInstitution = createAsyncThunk(
  'institution/getInstitution',
  async () => {
    try {
      const response = await axios.get(GET_ALL_INSTITUTION_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

// export const updateInstitution = createAsyncThunk(
//   "institution/updateInstitution",
//   async ({ id, body, title }) =>
//     fetch(`http://13.59.94.46/aeon/api/v1/Institution/EnableDisable${id}`, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         body,
//       }),
//     }).then((res) => res.json())
// );

export const updateInstitution = createAsyncThunk(
  'institution/updateInstitution',
  async ({ values }) => {
    try {
      const response = await axios.put(EDIT_INSTITUTION_URL, values);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

// export const getInstitution = createAsyncThunk('institution/getInstitution', async (_id) => fetch('http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll').then((res) => res.json()));

// export const getAllInstitutions = createAsyncThunk(
//   'institution/getInstitution', async (_arg, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll');
//       return data;
//     } catch (error) {
//       rejectWithValue(error.response.data);
//     }
//   },
// );

export const deleteInstitution = createAsyncThunk(
  'institution/deleteInstitution',
  async () => {
    try {
      const response = await axios.delete(DELETE_INSTITUTION_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const createInstitution = createAsyncThunk(
  'institution/createInstitution',
  async (initialInstitution) => {
    try {
      const response = await axios.post(
        NEW_INSTITUTION_URL,
        initialInstitution,
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

// export const deleteInstitution = createAsyncThunk(
//   'institution/deleteInstitution',
//   async (code) => fetch(
//     `http://13.59.94.46/aeon/api/v1/Institution/EnableDisable?code=${code}`,
//     {
//       method: 'DELETE',
//     },
//   ).then((res) => res.json()),
// );

// const CREATE_URL = 'http://13.59.94.46/aeon/api/v1/Institution/Create';

// export const fetchInstitutions = createAsyncThunk('institution/getInstitution', async () => {
//   try {
//     const response = await axios.get(CREATE_URL);
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// });

// export const createInstitution = createAsyncThunk(
//   'institution/createInstitution',
//   async ({ values }) => fetch('http://13.59.94.46/aeon/api/v1/Institution/Create', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title: values.title,
//       body: values.body,
//     }),
//   }).then((res) => res.json()),
// );

// export const makeInstitution = createAsyncThunk(
//   'institution/createInstitution', async (_arg, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(
//         'http://13.59.94.46/aeon/api/v1/Institution/Create', values,
//       );
//       return data;
//     } catch (error) {
//       rejectWithValue(error.response.data);
//     }
//   },
// );

// export const addNewInstitution = createAsyncThunk(
//   'institution/addNewInstitution',
//   async (initialInstitution) => {
//     try {
//       const response = await axios.post(NEW_INSTITUTION_URL, initialInstitution);
//       return response.data;
//     } catch (error) {
//       return error.message;
//     }
//   },
// );

// export const updateInstitution = createAsyncThunk(
//   'institution/updateInstitution',
//   async ({ id, body, title }) => fetch(
//     `http://13.59.94.46/aeon/api/v1/Institution/EnableDisable${id}`,
//     {
//       method: 'PUT',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title,
//         body,
//       }),
//     },
//   ).then((res) => res.json()),
// );

const institutionSlice = createSlice({
  name: 'institution', // sliceName:
  initialState: {
    institution: [],
    loading: false,
    status: 'idle',
    error: null,
    edit: false,
    body: '',
  },

  reducers: {
    // setUpdate: (state, action) => {
    //   state.edit = action.payload.edit;
    //   state.body = action.payload.body;
    // },
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

    // [getAllInstitutions.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getAllInstitutions.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.institution = [action.payload];
    // },
    // [getAllInstitutions.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },

  extraReducer(builder) {
    builder.addCase(fetchInstitutions.pending, (state, action) => {
      state.status = 'loading';
    })
      .addCase(fetchInstitutions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.institution = action.payload;
        // return action.payload;

        // const loadedInstitution = action.payload.map((item) => item);

        // state.institution = state.institution.concat(loadedInstitution);
      })
      .addCase(fetchInstitutions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewInstitution.fulfilled, (state, action) => {
        action.payload.institutionId = Number(action.payload.institutionId);
        action.payload.date = new Date().toISOString();
        console.log(action.payload);
        state.institution.push(action.payload);
      });
  },
});

export const selectAllInstitution = (state) => state.institution.institution;
export const getInstitutionStatus = (state) => state.institution.status;
export const getInstitutionError = (state) => state.institution.error;
export const { setUpdate } = institutionSlice.actions;
export default institutionSlice.reducer;
