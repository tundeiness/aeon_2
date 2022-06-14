/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// const ProtectedRoutes = () => {
//   const location = useLocation();
//   const { authLogin } = useContext(globalC);
//   console.log('authLogin', authLogin);

//   return authLogin ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/sign-in" replace state={{ from: location }} />
//   );
// };

const ProtectedRoutes = ({ auth: { isAuthenticated } }) => {
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
