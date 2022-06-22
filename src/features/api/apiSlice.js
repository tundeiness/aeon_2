/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://13.59.94.46/aeon' }),
  tagTypes: ['Get'],
  endpoints: (builder) => ({}),
});
