/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { lazy } from 'react';

// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';
// const LoginView = lazy(() => import('../'));
const LoginView = lazy(() => import('./pages/sign-in/signin'));
const ForgotPasswordView = lazy(() => import('./pages/forgot-password/forgot-password'));
const CheckEmailView = lazy(() => import('./pages/check-email/check-email'));
const NewPasswordView = lazy(() => import('./pages/new-password/new-password'));
const PasswordResetView = lazy(() => import('./pages/password-reset/password-reset'));
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

const routes = [
  {
    path: '/',
    element: <LoginView />,
    protected: false,
    title: 'Log In',
    exact: true,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordView />,
    protected: false,
    title: 'Forgot Password',
    exact: true,
  },
  {
    path: '/check-email',
    element: <CheckEmailView />,
    protected: false,
    title: 'Check Email',
    exact: true,
  },
  {
    path: '/new-password',
    element: <NewPasswordView />,
    protected: false,
    title: 'New Password',
    exact: true,
  },
  {
    path: '/password-reset',
    element: <PasswordResetView />,
    protected: false,
    title: 'Password Reset',
    exact: true,
  },
];

export default routes;
