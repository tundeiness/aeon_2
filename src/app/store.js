import { configureStore } from '@reduxjs/toolkit';
import { dashboardAPI } from '../services/dashboardAPI';

export default configureStore({
  reducer: { [dashboardAPI.reducerPath]: dashboardAPI.reducer },
});
