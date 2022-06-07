/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Outlet,
} from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Navigation from '../../components/sideBarNav/sidebar-nav';
import { useStateContext } from '../../contexts/ContextProvider';
import DeleteInstitution from './institutions/deleteInstitution/DeleteInstitution';
import SignIn from '../sign-in/sign-in';
import './layout.css';

const Layout = () => {
  const test = 0;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const {
  //   isClicked, handleSetModal, activeModal, setActiveModal, isLoggedIn,
  // } = useStateContext();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    // <div className="relative flex min-h-screen overflow-hidden outline outline-red-500">
    //   {activeModal ? (
    //     <>
    //       <DeleteInstitution />
    //       <Navigation />
    //       <Outlet />
    //     </>
    //   ) : (
    //     <>
    //       <Navigation />
    //       <Outlet />
    //     </>
    //   )}
    // </div>
    <>
      <Outlet />
    </>
  );
};

export default Layout;
