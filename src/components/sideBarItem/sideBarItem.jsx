/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiHomeAlt, BiFile } from 'react-icons/bi';
import { FiBarChart2, FiFlag, FiUser } from 'react-icons/fi';
import { ImStack } from 'react-icons/im';
import { BsCheck2Square } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { CgChevronDown } from 'react-icons/cg';
import './sidebaritem.css';

const SideBarItem = ({ linkname, title, classProps }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [defaultHome, setDefaultHome] = useState('dashboard');

  const switchDefaultHome = (linkName) => {
    setDefaultHome(linkName);
  };

  const handleMenuDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  const iconArray = [
    ['dashboard', <BiHomeAlt key="0" />],
    ['institution', <FiBarChart2 key="1" />],
    ['products', <ImStack key="2" />],
    ['users', <BsCheck2Square key="3" />],
    ['accounts', <FiFlag key="4" />],
    ['reports', <BiFile key="5" />],
    ['CE-ID', <AiOutlineIdcard key="6" />],
    ['profile', <FiUser key="7" />],
    ['log out', <MdLogout key="8" />],
    ['caret', <CgChevronDown key="9" />],
  ];
  return (
    // <li className={`d-flex  flex-column ${classProps} list-links`}>{title}</li>
    <li className="flex justify-between items-center space-x-3 py-3 px-4 hover:bg-buttonTwo rounded transition duration-200">
      {/* <span className="flex flex-row items-center"> */}
      {/* <ImStack className="xl:w-6 xl:h-7" /> */}
      <NavLink
        to="/dashboard"
        className={(navData) => (navData.isActive
          ? 'active'
          : ''`inline-block rounded font-medium leading-6 text-indigo-100 ml-3`)}
      >
        {linkname}
      </NavLink>
      {/* </span> */}
      {/* <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" /> */}
    </li>
  );
};

export default SideBarItem;
