import { configureStore } from '@reduxjs/toolkit';

import InstitutionReducer from './features/institutionSlice';
import UserReducer from './features/userSlice';
import Loginreducer from './features/loginSlice';

export default configureStore({
  // app: DashboardReducer,
  reducer: {
    app: InstitutionReducer,
    user: UserReducer,
    login: Loginreducer,
  },
});
