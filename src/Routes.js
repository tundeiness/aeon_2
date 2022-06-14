/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import PageLoader from './components/pageLoader/pageLoader';
// import Protected from './components/protectedRoutes/ProtectedRoutes';
// import { ProtectedLayout } from './components/protectedLayout/ProtectedLayout';
import MainLayout from './pages/main-layout';
import { useAuth } from './components/auth';

// const DashboardView = lazy(() => import('./Views/dashboard/dashboard'));
// const SidebarView = lazy(() => import('./components/sideBarNav/sidebar-nav'));
// const InstitutionView = lazy(() => import('./Views/dashboard/institutions/institutions'));
// const ProductsView = lazy(() => import('./Views/dashboard/products/products'));
// const LayoutView = lazy(() => import('./Views/layout/Layout'));
// const DashboardView = lazy(() => import('./Views/layout/dashboard/dashboard'));

// const InstitutionView = lazy(() => import('./Views/layout/institutions/institutions'));
// const UsersView = lazy(() => import('./Views/layout/products/products'));
// const AccountsView = lazy(() => import('./Views/layout/products/products'));
// const ReportsView = lazy(() => import('./Views/layout/products/products'));
// const CEIDView = lazy(() => import('./Views/layout/products/products'));
// const ProfileView = lazy(() => import('./Views/layout/products/products'));
// const ProductsView = lazy(() => import('./Views/layout/products/products'));

// const AppRouter = () => {
//   const element = useRoutes([
//     {
//       exact: true,
//       path: '/',
//       element: <LoginView />,
//       protected: false,
//       // children: [
//       //   { path: '/forgot-password', element: <ForgotPasswordView /> },
//       // ],
//     },
//     {
//       path: '/forgot-password',
//       exact: true,
//       element: <ForgotPasswordView />,
//       protected: false,
//     },
// {
//   path: "*",
//   element: <NotFound />,
// },
// {
//   element: <LoginView />,
//   children: [
//     { path: '/', element: <LoginView /> },
//     //  { path: "signup", element: <SignUp /> },
//   ],
// },
// {
//     element: <MainLayout />,
//     children: [
//         { path: "home", element: <Home /> },
//         { path: "about", element: <About /> },
//     ],
// },
//   ]);
//   return element;
// };
// export default AppRouter;

// const routes = [
// {
//   path: '/sign-in',
//   element: <LoginView />,
//   protected: false,
//   title: 'Log In',
//   exact: true,
// },
// {
//   path: '/forgot-password',
//   element: <ForgotPasswordView />,
//   protected: false,
//   title: 'Forgot Password',
//   exact: true,
// },
// {
//   path: '/check-email',
//   element: <CheckEmailView />,
//   protected: false,
//   title: 'Check Email',
//   exact: true,
// },
// {
//   path: '/new-password',
//   element: <NewPasswordView />,
//   protected: false,
//   title: 'New Password',
//   exact: true,
// },
// {
//   path: '/password-reset',
//   element: <PasswordResetView />,
//   protected: false,
//   title: 'Password Reset',
// },

// {
//   path: 'layout/*',
//   element: <LayoutView />,
//   protected: false,
//   title: 'Layout',
//   children: [
//     {
//       path: 'dashboard',
//       element: <DashboardView />,
//     },
//     { path: 'products', element: <ProductsView /> },
//     {
//       path: 'institutions',
//       element: <InstitutionView />,
//       children: [
//         {
//           path: 'create-institution',
//           element: <CreateInstitution />,
//         },
//       ],
//     },
// {
//   path: '/layout/institutions/create-institution',
//   element: <CreateInstitution />,
// },
// ],
//   },
// ];

// export default routes;

import { useStateContext } from './contexts/ContextProvider';

// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';
// const LoginView = lazy(() => import('../'));

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/sign-in" replace />;
};

const LoginView = lazy(() => import('./pages/sign-in/sign-in'));
const ForgotPasswordView = lazy(() => import('./pages/forgot-password/forgot-password'));
const CheckEmailView = lazy(() => import('./pages/check-email/check-email'));
const NewPasswordView = lazy(() => import('./pages/new-password/new-password'));
const ResetPasswordView = lazy(() => import('./pages/reset-password/reset-password'));
// const LayoutView = lazy(() => import('./pages/layout/Layout'));
const DashboardView = lazy(() => import('./pages/dashboard/dashboard'));
// const DashboardView = lazy(() => import('./pages/layout/dashboard/dashboard'));
// const InstitutionView = lazy(() => import('./pages/institutions/institutions'));
// const InstitutionView = lazy(() => import('./pages/layout/institutions/institutions'));
const InstitutionView = lazy(() => import('./pages/institutions/institutions'));
// const DeleteInstitutionView = lazy(() => import('./pages/layout/institutions/deleteInstitution/DeleteInstitution'));
// const CreateInstitution = lazy(() => import('./pages/layout/institutions/create-instituition/create-institution'));
// const ProductsView = lazy(() => import('./pages/layout/products/products'));

// const { isLoggedIn } = useStateContext();

const MainRoutes = () => {
  // const location = useLocation();
  // const background = location.state && location.state.background;
  const [user, setUser] = React.useState(null);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route> */}
        <Route index element={<LoginView />} />
        <Route path="/sign-in" element={<LoginView />} />
        <Route path="reset-password" element={<ResetPasswordView />} />
        <Route path="new-password" element={<NewPasswordView />} />
        <Route path="forgot-password" element={<ForgotPasswordView />} />
        <Route path="check-email" element={<CheckEmailView />} />

        {/* <Route
          path="/dashboard"
          element={<MainLayout />}
        > */}
        <Route element={<MainLayout />}>
          <Route index element={<DashboardView />} />
          <Route path="dashboard" element={<DashboardView />} />
          <Route path="institutions" element={<InstitutionView />} />
          {/* <Route
            path="institutions/delete-institution"
            element={<DeleteInstitutionView />}
          /> */}
        </Route>
        {/* <Route
            path="institutions/create-institution"
            element={<CreateInstitutionView />}
          /> */}
        {/* <Route
            path="delete-institution"
            element={<DeleteInstitutionView />}
          /> */}
        {/* </Route> */}

        {/* <Route index element={<LoginView />} />
      <Route path="sign-in" element={<LoginView />} />
      <Route path="dashboard" element={<DashboardView />} />
      <Route path="institutions" element={<InstitutionView />} /> */}
        {/* <Route
        path="/main-layout"
        element={(
          <RequireAuth>
            <MainLayout />
          </RequireAuth>
        )}
      /> */}
        <Route
          path="*"
          element={(
            <h1 className="flex flex-col items-center justify-center">
              There&apos;s nothing here: 404!
            </h1>
          )}
        />
        {/* <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route> */}
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        {/* <Route
        path="/dashboard"
        element={(
          <ProtectedRoute>
            <DashboardView />
          </ProtectedRoute>
        )}
      >
        <Route
          path="/institution"
          element={(
            <ProtectedRoute>
              <InstitutionView />
            </ProtectedRoute>
          )}
        />

        <Route
          path="/products"
          element={(
            <ProtectedRoute>
              <ProductsView />
            </ProtectedRoute>
          )}
        /> */}
        {/* <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashboardView />} />
          <Route
            path="tabs"
            element={<Tabs props={{ userName: 'Bikash web' }} />}
          >
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />} />
            <Route
              path="tab2"
              element={<ProtectedRoutes roleRequired="USER" />}
            >
              <Route path="/tabs/tab2" element={<Tab2 />} />
            </Route>
            <Route path="tab3" element={<Tab3 />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="dynamic-form" element={<DynamicForm />} />
          <Route
            path="users"
            element={<Users extraItem="test extra item from router" />}
          />
          <Route path="users/:userId" element={<SingleUser />} />
          <Route path="users/new" element={<NewUser />} />
        </Route> */}
        {/* </Route> */}

        {/** Public Routes */}
        {/** Wrap all Route under PublicRoutes element */}
        {/* <Route path="sign-in" element={<PublicRoutes />}>
        <Route path="/sign-in" element={<LoginView />} />
      </Route> */}

        {/** Permission denied route */}
        {/* <Route path="/denied" element={<PermissionDenied />} /> */}
      </Routes>
      {/* {background && (
        <Route path="/delete-institution" element={<DeleteInstitutionView />} />
      )} */}

      {/* <Route path="delete-institution" element={<DeleteInstitutionView />} /> */}

      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={(
              <ProtectedRoutes user={user}>
                <Dashboard user={user} />
              </ProtectedRoutes>
            )}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </Suspense>
  );
};

export default MainRoutes;

// import { Navigate, Route, Routes } from "react-router-dom";

// const AppRoutes = () => {

//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <Routes>
//       <Route
//         path="/admin"
//         element={
//           isAuthenticated ? (
//             <Navigate to="/admin/dashboard" />
//           ) : (
//             <Navigate to="/auth/login" />
//           )
//         }
//       />

//       <Route
//         exact
//         path="/admin"
//         element={
//           isAuthenticated ? <DashboardLayout /> : <Navigate to="/auth/login" />
//         }
//       >
//         <Route exact path="/dashboard" element={<Dashboard />} />
//         <Route
//           exact
//           path="/property-management"
//           element={<AdminPropManagement />}
//         />
//         <Route exact path="/new-property" element={<NewProperty />} />
//       </Route>

//     </Routes>
//   );
// };

// export default AppRoutes;

// export default function Login() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { authLogin, loginData } = useContext(globalC);

//   if (authLogin) {
//     const { from } = location.state || { from: { pathname: "/" } };
//     navigate(from, { replace: true });
//   }

//   return (
//     <div
//       style={{ height: "100vh" }}
//       className="d-flex justify-content-center align-items-center"
//     >
//       <button type="button" onClick={loginData} className="btn btn-primary">
//         Login
//       </button>
//     </div>
//   );
// }

{ /* <Route element={<PrivateWrapper auth={{ isAuthenticated: false }} />}>
            <Route path="/dashboard3" element={<h1>Dashboard 3</h1>} />
          </Route>
          <Route element={<PrivateWrapper auth={{ isAuthenticated: true }} />}>
            <Route path="/dashboard4" element={<h1>Dashboard 4</h1>} />
          </Route> */ }
