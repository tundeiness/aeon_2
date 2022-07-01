/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import './users.css';
import React, { useState } from 'react';
// import { FiSearch, FiEdit2 } from 'react-icons/fi';
// import { BsArrowDownShort } from 'react-icons/bs';
// import { GoPrimitiveDot } from 'react-icons/go';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import { Routes, Link, Outlet } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
// import SupportButton from '../../components/support/support';
// import { useStateContext } from '../../contexts/ContextProvider';
// import SidebarNav from '../../components/sideBarNav/sidebar-nav';
// import DeleteInstitution from './deleteInstitution/DeleteInstitution';
// import InstitutionList from '../../../components/institutionContent/InstitutionList';
import UserList from '../../components/user-content/UserList';
// import Data from '../../data/MOCK_DATA.json';

const User = () => {
  const test = 0;
  return (
    // <article className="flex-1">
    <>
      {/* <SidebarNav /> */}
      <UserList />
    </>
  );
};

export default User;
