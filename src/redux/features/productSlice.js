/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
//   const res = await axios.get(
//     'http://13.59.94.46/aeon/api/v1/Product/RetrieveAll',
//   );
//   return res.data;
// });

// export const getAllProducts = createAsyncThunk(
//   'product/getAllProducts',
//   async (_id) => fetch('http://13.59.94.46/aeon/api/v1/Product/RetrieveAll').then((res) => res.json()),
// );

// export const getAllProducts = createAsyncThunk(
//   'product/getAllProducts',
//   async ({ rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         'http://13.59.94.46/aeon/api/v1/Product/RetrieveAll',
//       );
//       return response.data;
//     } catch (error) {
//       // console.log(error.message);
//       rejectWithValue(error.message);
//     }
//   },
// );

const GET_ALL_PRODUCTS_URL = 'http://13.59.94.46/aeon/api/v1/Product/RetrieveAll';

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async () => {
    try {
      const response = await axios.get(GET_ALL_PRODUCTS_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (_arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://13.59.94.46/aeon/api/v1/Product/RetrieveAll', { name: 'BVN', status: 'active' },
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const getProductBand = createAsyncThunk(
  'product/getProductBand',
  async () => {
    const res = await axios.get(
      'http://13.59.94.46/aeon//api/v1/Product/GetBands',
    );
    return res.data;
  },
);

// export const getRegisteredUser = createAsyncThunk(
//   "auth/getRegistrationRes",
//   async (currentUser, thunkAPI) => {
//     try {
//       const response = await axios.post("/api/v1/auth/register", currentUser);
//       return response.data;
//     } catch (error) {
//       // console.log(error.message)
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export async function fetchTrackers(dispatch, getState) {
//   try {
//     const { data } = await axios.get(`${env.APP_URL}/fetch/trackers.json`);
//     dispatch(setInitialState({ type: 'setInitialState', data }));
//   } catch (error) {
//     console.log(error);
//   }
// }

const initialState = {
  product: [],
  productContainer: [],
  status: 'idle',
  error: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // initialState: {
  //   product: [
  //     {
  //       name: 'BVN Service',
  //       summary:
  //         'The BVN Full Details Service is used to confirm the authenticity of a BVN and/or phone number by matching any one or more of the request against the last name and date of birth of the customer.',
  //       inputParameters: 'Bvn',
  //       url: 'https://credequityapi.com/CredBvn/api/v1/Bvn/GetCustomerBvn',
  //       pricePerCall: 0.0,
  //       code: '100301',
  //       dateCreated: '2021-03-04T11:22:17.447766',
  //       dateLastModified: '2021-03-05T10:11:32.5831291',
  //       lastUpdatedBy: 'support@credequity.com',
  //       apiDocumentation: 'none',
  //       testUrl: 'http://102.164.38.38/CredBvn/api/v1/Bvn/GetCustomerBvn',
  //       status: 'Active',
  //     },
  //   ],
  //   loading: false,
  //   error: null,
  // },

  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getProductBand.pending]: (state) => {
      state.loading = true;
    },
    [getProductBand.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = [action.payload];
    },
    [getProductBand.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [createProduct.pending]: (state) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = [action.payload];
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const selectAllProducts = (state) => state.product.product;
export const getProductStatus = (state) => state.product.status;
export const getProductError = (state) => state.product.error;
export const selectProductByCode = (state, code) => state.product.product.find((product) => product.code === code);
export default productSlice.reducer;
