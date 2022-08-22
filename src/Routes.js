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
// import CEID from './pages/ceid/CEID';

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

import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';

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
const DashboardView = lazy(() => import('./pages/dashboard/dashboard'));
const CEID = lazy(() => import('./pages/ceid/CEID'));
const CreditReport = lazy(() => import('./pages/ceid/credit-report'));
const OCR = lazy(() => import('./pages/ceid/ocr'));
const BusinessSearch = lazy(() => import('./pages/ceid/business-name'));
const IdentityCheck = lazy(() => import('./pages/ceid/identity-check'));

const ForgotPassword = lazy(() => import('./pages/new-password/new-password'));
const ChangePassword = lazy(() => import('./pages/profile/change-password/change-password'));
const Kyc = lazy(() => import('./pages/profile/kyc/kyc'));

// const DashboardView = lazy(() => import('./pages/layout/dashboard/dashboard'));
// const InstitutionView = lazy(() => import('./pages/institutions/institutions'));
// const InstitutionView = lazy(() => import('./pages/layout/institutions/institutions'));

const InstitutionView = lazy(() => import('./pages/institutions/institutions'));
const CreateInstitutionView = lazy(() => import('./pages/institutions/create-instituition/create-institution'));
const ProductView = lazy(() => import('./pages/products/products'));
const CreateProductView = lazy(() => import('./pages/products/create-product/create-product'));
const EditInstitutionView = lazy(() => import('./pages/institutions/update-institution/update-institution'));
const ViewProductView = lazy(() => import('./pages/products/view-product/view-product'));
const AllUserView = lazy(() => import('./pages/users/User'));
const CreateUserView = lazy(() => import('./pages/users/create-user/create-user'));
const EditUserView = lazy(() => import('./pages/users/edit-user/edit-user'));
const AccountUtilizationView = lazy(() => import('./pages/accounts/daily-utilization'));
const TransactionsReportView = lazy(() => import('./pages/reports/transactions'));
const ApiReportView = lazy(() => import('./pages/reports/api-usage'));
const OneInstitutionView = lazy(() => import('./pages/institutions/view-institution/view-institution'));

const MainRoutes = () => {
  // const location = useLocation();
  // const background = location.state && location.state.background;
  // const [user, setUser] = React.useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(testUser.userId);
  return (
    <Suspense
      fallback={(
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="heading flex flex-row items-center justify-center">
            Loading ...
          </h1>
        </div>
      )}
    >
      <Routes>
        {/* <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route> */}
        {/* <Route index element={<LoginView />} /> */}
        {/* <Route path="/" element={<LoginView />} /> */}
        <Route index element={<LoginView />} />
        <Route path="sign-in" element={<LoginView />} />

        <Route path="reset-password" element={<ResetPasswordView />} />
        <Route path="new-password" element={<NewPasswordView />} />
        <Route path="forgot-password" element={<ForgotPasswordView />} />
        <Route path="check-email" element={<CheckEmailView />} />

        <Route element={<ProtectedRoutes isAllowed={!user} />}>
          <Route element={<MainLayout />}>
            {/* <Route index element={<DashboardView />} /> */}
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="institutions" element={<InstitutionView />} />
            <Route
              path="institutions/create-institution"
              element={<CreateInstitutionView />}
            />
            <Route
              path="institutions/edit-institution"
              element={<EditInstitutionView />}
            />
            <Route
              path="institutions/view-institution"
              element={<OneInstitutionView />}
            />

            {/* <Route
              path="institutions/view-institution/:id"
              element={<OneInstitutionView />}
            /> */}
            {/* <Route path="edit-institution/:id" element={<ViewInstitutionView />} /> */}
            {/* <Route
            path="institutions/delete-institution"
            element={<DeleteInstitutionView />}
          /> */}
            {/* <Route path="/institution/:id" component={InstitutionDetails} /> */}
            <Route path="users/create-user" element={<CreateUserView />} />
            <Route path="users/edit-user" element={<EditUserView />} />
            {/* <Route path="users/view-user" element={<ViewUser />} /> */}
            <Route
              path="products/create-product"
              element={<CreateProductView />}
            />
            <Route path="products/view-product" element={<ViewProductView />} />
            <Route path="products" element={<ProductView />} />
            <Route path="users" element={<AllUserView />} />
            <Route
              path="accounts/daily-utilization"
              element={<AccountUtilizationView />}
            />
            <Route
              path="reports/transactions"
              element={<TransactionsReportView />}
            />

            <Route path="reports/api-usage" element={<ApiReportView />} />
            <Route path="ce-id" element={<CEID />} />
            <Route path="ce-id/credit-report" element={<CreditReport />} />
            <Route path="ce-id/ocr" element={<OCR />} />
            <Route path="/ce-id/business-name" element={<BusinessSearch />} />
            <Route path="ce-id/identity-check" element={<IdentityCheck />} />
            <Route path="profile" element={<ChangePassword />} />
            <Route path="/profile/kyc" element={<Kyc />} />
          </Route>
        </Route>
        {/* <Route
          path="ce-id"
          element={(
            <ProtectedRoutes
              redirectPath="/dashboard"
              isAllowed={!!user && user.role.includes('admin')}
            >
              <CE_ID />
            </ProtectedRoutes>
          )}
        />
        <Route
          path="profile"
          element={(
            <ProtectedRoutes
              redirectPath="/dashboard"
              isAllowed={!!user && user.roles.includes('admin')}
            >
              <Profile />
            </ProtectedRoutes>
          )}
        /> */}

        {/* <Route path="/sign-in" element={<LoginView />} /> */}

        {/* <Route
          path="/dashboard"
          element={<MainLayout />}
        > */}

        <Route
          path="products/create-product"
          element={<CreateProductView />}
        />
        <Route path="products/view-product" element={<ViewProductView />} />
        <Route path="products" element={<ProductView />} />

        <Route path="users" element={<AllUserView />} />
        <Route path="ce-id" element={<CEID />} />
        <Route path="ce-id/credit-report" element={<CreditReport />} />
        <Route path="ce-id/ocr" element={<OCR />} />
        <Route path="/ce-id/business-name" element={<BusinessSearch />} />

        {/* <Route path="profile" element={<ChangePassword />} />
        <Route path="/profile/kyc" element={<Kyc />} /> */}
        {/* <Route path="ce-id/identity-check" element={<IdentityCheck />} /> */}

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
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="heading flex flex-row items-center justify-center">
                <span className="text-8xl">404!:</span>
                {' '}
                There&apos;s nothing
                here
              </h1>
            </div>
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
