import { Outlet } from 'react-router-dom';
import SidebarNav from '../sideBarNav/sidebar-nav';
import { AuthProvider } from '../auth';

const MainLayout = () => {
  <AuthProvider>
    <>
      <SidebarNav />
      <Outlet />
    </>
  </AuthProvider>;
};

export default MainLayout;
