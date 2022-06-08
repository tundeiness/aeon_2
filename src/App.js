/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import {
  Routes, Route, useRoutes, useLocation, useNavigate,
} from 'react-router-dom';
import PageLoader from './components/pageLoader/pageLoader';
import Dashboard from './pages/layout/dashboard/dashboard';
import Institutions from './pages/layout/institutions/institutions';
import Modal from './pages/layout/institutions/deleteInstitution/DeleteInstitution';
import { ContextProvider, useStateContext } from './contexts/ContextProvider';
import PrivateRoute from './utils/PrivateRoute';
import SidebarNav from './components/sideBarNav/sidebar-nav';
import { AuthProvider } from './components/auth';
// import {ContextProvider} from './contexts/ContextProvider'

// import routes from './Routes';
import MainRoutes from './Routes';
import './App.css';

// const SignInView = lazy(() => import('./pages/sign-in/sign-in'));
// const ForgotPasswordView = lazy(() => import('./pages/forgot-password/forgot-password'));
// const CheckEmailView = lazy(() => import('./pages/check-email/check-email'));
// const NewPasswordView = lazy(() => import('./pages/new-password/new-password'));
// const PasswordResetView = lazy(() => import('./pages/password-reset/password-reset'));

const App = () => {
  // const elements = useRoutes(routes);
  const Navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  const { isLoggedIn, isAuthenticated } = useStateContext();
  // const elements = useRoutes(routes);
  return (
    <ContextProvider>
      {/* <div className="relative flex min-h-screen overflow-hidden"> */}
      {/* <SidebarNav /> */}
      <MainRoutes />
      {/* </div> */}

      {/* {elements} */}

      {/* <Routes location={background || location}>
        <Route path="/" element={<Institutions />}>
          <Route path="/delete-institution" element={<Modal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/delete-institution" element={<Modal />} />
        </Routes>
      )} */}

      {/* <Routes>
        <Route path="/sign-in" element={<SignInView />} />
        <Route path="/forgot-password" element={<ForgotPasswordView />} />
        <Route path="/check-email" element={<CheckEmailView />} />
        <Route path="/new-password" element={<NewPasswordView />} />
        <Route path="/password-reset" element={<PasswordResetView />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={(
            <p className="flex justify-center items-center text-2xl">
              Page Not Found !!!
            </p>
          )}
        />
      </Routes> */}
    </ContextProvider>
  );
};

export default App;
