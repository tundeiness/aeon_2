/* eslint-disable import/prefer-default-export */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth';
import SidebarNav from '../sideBarNav/sidebar-nav';

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <SidebarNav />
      <Outlet />
    </div>
  );
};
