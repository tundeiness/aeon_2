/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
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
const EDIT_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/Update';
const DELETE_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/Create';
const GET_ALL_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll';
const ENABLE_DISABLE_INSTITUTION_URL = 'http://13.59.94.46/aeon/api/v1/Institution/EnableDisable?code=';

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

export const enableDisableInstitution = createAsyncThunk(
  'institution/enableDisableInstitution',
  async (code, { rejectWithValue }) => {
    try {
      const response = await axios.post(`ENABLE_DISABLE_INSTITUTION_URL ${code}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// export const getOneInstitution = createAsyncThunk(
//   'institution/getOneInstitution',
//   async (code, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         `${GET_ONE_INSTITUTION_URL}${code}`,
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Cannot find Institution');
//     }
//   },
// );

// const getInstitutionById = createAsyncThunk(
//   "institution/getInstitutionById",
//   async (institutionId) => {
//     const response = await axios.get(`https://reqres.in/api/institution/${institutionId}`
//     return response.data;
//   },
//
// );

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
  async (values, { rejectWithValue }) => {
    const { id, ...fields } = values;
    try {
      const response = await axios.put(EDIT_INSTITUTION_URL, fields);
      return response.data;
    } catch (error) {
      // return error.message;
      return rejectWithValue(error.response.data);
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
  async (id, thunkAPI) => {
    // const token = thunkAPI.getState().auth.user.token;
    try {
      const response = await axios.delete(`${DELETE_INSTITUTION_URL}${id}, token`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

// const token = thunkAPI.getState().auth.user.token;
export const createInstitution = createAsyncThunk(
  'institution/createInstitution',
  async (initialInstitution, { rejectWithValue }) => {
    // const {
    //   name,
    //   rcNumber,
    //   address,
    //   phone,
    //   websiteUrl,
    //   category,
    //   noOfCalls,
    //   threshold,
    //   documentation,
    //   description,
    //   notificationEmail,
    //   microservices,
    // } = initialInstitution;

    // const institutionData = {
    //   name,
    //   rcNumber,
    //   address,
    //   phone,
    //   websiteUrl,
    //   category,
    //   noOfCalls,
    //   threshold,
    //   documentation,
    //   description,
    //   notificationEmail,
    //   microservices,
    // };

    // const token = thunkAPI.getState().auth.user.token;

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    try {
      const response = await axios.post(
        NEW_INSTITUTION_URL,
        initialInstitution,
        // {
        //   institution: institutionData,
        // },
        // config,
      );
      // dispatch({ payload: institutionData });
      return response.data;
    } catch (error) {
      // return error.message;
      return rejectWithValue(error.response.data);
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

const initialState = {
  institution: [],
  institutionContainer: [],
  institutionSearchContainer: [],
  institutionStatusContainer: [],
  status: 'idle',
  error: null,
};

const institutionSlice = createSlice({
  name: 'institution', // sliceName:
  initialState,
  reducers: {
    filteredInstitutions: (state, action) => {
      state.institution = state.institutionContainer.filter(
        (institutionItem) => institutionItem.name.toLowerCase().includes(action.payload),
      );
    },
    searchedInstitution: (state, action) => {
      state.institution = state.institutionContainer.filter(
        (searchParam) => searchParam.name.toLowerCase().includes(action.payload)
          || searchParam.code.includes(action.payload),
      );
    },

    filterInstitutionStatus: (state, action) => {
      const statusCategory = state.institutionContainer.filter(
        (itemStatus) => (itemStatus.status === action.payload),
      );

      const allCategory = state.institutionContainer.filter(
        (itemStatus) => itemStatus.status !== action.payload,
      );

      state.institution = action.payload ? statusCategory : allCategory;
    },

    // selectById: (state, action) => {
    //   state.institution = state.institution.find((item) => item.id === action.payload);
    // },
  },

  // extraReducers: {

  // [getInstitution.pending]: (state) => {
  //   state.loading = true;
  // },
  // [getInstitution.fulfilled]: (state, action) => {
  //   state.loading = false;
  //   state.institution = [action.payload];
  // },
  // [getInstitution.rejected]: (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // },
  // [deleteInstitution.pending]: (state) => {
  //   state.loading = true;
  // },
  // [deleteInstitution.fulfilled]: (state, action) => {
  //   state.loading = false;
  //   state.institution = action.payload;
  // },
  // [deleteInstitution.rejected]: (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // },
  // [createInstitution.pending]: (state) => {
  //   state.loading = true;
  // },
  // [createInstitution.fulfilled]: (state, action) => {
  //   state.loading = false;
  //   state.institution = [action.payload];
  // },
  // [createInstitution.rejected]: (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // },

  // [updateInstitution.pending]: (state) => {
  //   state.loading = true;
  // },
  // [updateInstitution.fulfilled]: (state, action) => {
  //   state.loading = false;
  //   state.institution = [action.payload];
  // },
  // [updateInstitution.rejected]: (state, action) => {
  //   state.loading = false;
  //   state.error = action.payload;
  // },

  // },

  extraReducers(builder) {
    builder
      .addCase(getInstitution.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getInstitution.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.institution = action.payload;
        state.institutionContainer = action.payload;
        // return action.payload;

        // const loadedInstitution = action.payload.map((item) => item);

        // state.institution = state.institution.concat(loadedInstitution);
      })
      .addCase(getInstitution.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createInstitution.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createInstitution.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const institution = action.payload;
        // state.entities[institution.id] = institution;
        // state.institution[institution.id] = institution;
        // state.institution.push(institution);
        state.institution = institution;
      })
      // .addCase(getOneInstitution.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.institution = state.institution.find((institution) => institution.code === action.payload.code);
      // })
      .addCase(createInstitution.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteInstitution.fulfilled, (state, action) => {
        state.institution = state.institution.filter(
          (institution) => institution.id !== action.payload.id,
        );
      })
      .addCase(enableDisableInstitution.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(enableDisableInstitution.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.institution = action.payload;
      })
      .addCase(enableDisableInstitution.rejected, (state) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllInstitutions = (state) => state.institution.institution;
export const selectInstitutionById = (state, id) => state.institution.institution.find((institution) => institution.id === id);
export const getInstitutionStatus = (state) => state.institution.status;
export const getInstitutionError = (state) => state.institution.error;
export const { filteredInstitutions, searchedInstitution, filterInstitutionStatus } = institutionSlice.actions;
export default institutionSlice.reducer;

// {
//   "category": "elit tempor commodo",
//   "code": "dolore",
//   "name": "ut veniam in ad",
//   "websiteUrl": "dolore ipsum",
//   "id": 87625212,
//   "token": "ad ut et consequat irure",
//   "description": "incididunt velit ut",
//   "status": "aute commodo esse",
//   "noOfCalls": 40971092,
//   "documentation": "id Excepteur dolor",
//   "address": "cupidatat dolore",
//   "rcNumber": "esse consectetur",
//   "testToken": "commodo quis labore",
//   "balance": -31821650.294540763,
//   "threshold": 36754816.875798196,
//   "notificationEmail": "tempor adipisicing ",
//   "productPriceBands": [
//     {
//       "id": -52324399,
//       "institutionCode": "eu nos",
//       "prodcutCode": "magna cupidatat",
//       "price": -81906633.71117774,
//       "min": 81902529,
//       "max": 62167332
//     },
//     {
//       "id": 97980890,
//       "institutionCode": "minim nostrud ex aliq",
//       "prodcutCode": "labore eu",
//       "price": 3252162.2702086866,
//       "min": 28528649,
//       "max": 7910489
//     }
//   ],
//   "ninCost": 89062816.50313893,
//   "frscCost": -92253699.0012023,
//   "bvnCost": 25903769.332107857,
//   "creditBureauCost": -23640245.88614875,
//   "cacCost": -21282443.02990651
// }
