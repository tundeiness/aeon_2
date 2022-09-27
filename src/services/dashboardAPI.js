/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://13.59.94.46/aeon';

const createRequest = (url) => ({ url });
export const dashboardAPI = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMetrics: builder.query({
      query: () => '/api/v1/Institution/RetrieveAll',
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardAPI;
