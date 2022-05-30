/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Outlet,
} from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Navigation from '../../components/sideBarNav/sidebar-nav';
import { useStateContext } from '../../contexts/ContextProvider';
import DeleteInstitution from './institutions/deleteInstitution/DeleteInstitution';
import './layout.css';

const Layout = () => {
  const test = 0;
  const {
    isClicked, handleSetModal, activeModal, setActiveModal,
  } = useStateContext();
  return (
    <div className="relative flex min-h-screen overflow-hidden outline outline-red-500">
      {activeModal ? (
        <>
          <DeleteInstitution />
          <Navigation />
          <Outlet />
        </>
      ) : (
        <>
          <Navigation />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Layout;
