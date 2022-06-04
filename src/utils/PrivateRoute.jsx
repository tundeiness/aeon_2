/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const data = 0;
  const auth = { token: false };
  return (
    auth.token ? <Outlet /> : <Navigate to="/sign-in" />
  );
};

export default PrivateRoute;
