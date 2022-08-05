/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

// const ProtectedRoutes = () => {
//   const testUser = JSON.parse(localStorage.getItem('user'));
//   const test = 0;
//   return testUser ? <Outlet /> : <Navigate to="/" replace />;
// };

const ProtectedRoutes = ({ isAllowed, redirectPath = '/', children }) => {
  if (isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoutes;

// {
//     "email": "timilehin@credequity.com",
//     "phoneNo": "2349072859752",
//     "role": "User",
//     "roleCode": "004",
//     "userId": "2d8ae0b6-0cd6-422d-b3c7-19727f50e1e8",
//     "isCustomerRole": false,
//     "institutionData": {
//         "name": "CREDEQUiTY",
//         "institutionToken": "c9cf463b-bfab-4228-861e-490738df2f30",
//         "institutuionCode": "99999"
//     }
// }
