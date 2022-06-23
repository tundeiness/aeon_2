import { configureStore } from '@reduxjs/toolkit';

import InstitutionReducer from './features/institutionSlice';
import UserReducer from './features/userSlice';
import LoginReducer from './features/loginSlice';
import ProductReducer from './features/productSlice';
import RoleReducer from './features/roleSlice';

export default configureStore({
  reducer: {
    institution: InstitutionReducer,
    user: UserReducer,
    login: LoginReducer,
    product: ProductReducer,
    role: RoleReducer,
  },
});
