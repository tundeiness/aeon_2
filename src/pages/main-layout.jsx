/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';

import SidebarNav from '../components/sideBarNav/sidebar-nav';

const MainLayout = () => {
  const test = 0;
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <SidebarNav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
