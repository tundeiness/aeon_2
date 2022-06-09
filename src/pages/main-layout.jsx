/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNav from '../components/sideBarNav/sidebar-nav';

const MainLayout = () => {
  const test = 0;
  return (
    <>
      <SidebarNav />
      <Outlet />
    </>
  );
};

export default MainLayout;
