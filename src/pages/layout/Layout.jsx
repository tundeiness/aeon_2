/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Outlet,
} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Navigation from '../../components/sideBarNav/sidebar-nav';
import './layout.css';

const Layout = () => {
  const test = 0;
  return (
    <div className="relative flex min-h-screen overflow-hidden outline outline-red-500">
      <Navigation />
      {/* <Dashboard /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
