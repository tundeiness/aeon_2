import {
  createSelector, createEntityAdapter,
} from '@reduxjs/toolkit';

import { apiSlice } from '../api/apiSlice';

const DASHBOARD_URL = 'http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll';

const initialState = {};

const dashboardSlice