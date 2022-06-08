import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => true;

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoutes;

// const useAuth = () =>
// get item from localstorage

// let user: any;

// const _user = localStorage.getItem('user');

// if (_user) {
//   user = JSON.parse(_user);
//   console.log('user', user);
// }
// if (user) {
//   return {
//     auth: true,
//     role: user.role,
//   };
// }
//   ({
//     auth: false,
//     role: null,
//   })
// ;

// protected Route state
// const ProtectedRouteType = {
//   roleRequired?: "ADMIN" | "USER",
// };

// const ProtectedRoutes = () => {
//   const { auth, role } = useAuth();

//   if (props.roleRequired) {
//     return auth ? (
//       props.roleRequired === role ? (
//         <Outlet />
//       ) : (
//         <Navigate to="/denied" />
//       )
//     ) : (
//       <Navigate to="/login" />
//     );
//   }
//   return auth ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoutes;
