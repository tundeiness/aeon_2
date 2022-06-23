import { configureStore } from '@reduxjs/toolkit';

import InstitutionReducer from './features/institutionSlice';
import UserReducer from './features/userSlice';
import LoginReducer from './features/loginSlice';
import ProductReducer from './features/productSlice';

export default configureStore({
  // app: DashboardReducer,
  reducer: {
    app: InstitutionReducer,
    user: UserReducer,
    login: LoginReducer,
    product: ProductReducer,
  },
});
