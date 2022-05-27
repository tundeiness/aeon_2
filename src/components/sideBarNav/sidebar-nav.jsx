/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiFile } from 'react-icons/bi';
import { FiBarChart2, FiFlag, FiUser } from 'react-icons/fi';
import { ImStack } from 'react-icons/im';
import { BsCheck2Square } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { CgChevronDown } from 'react-icons/cg';
// import Logo from '../../static/assets/img/logo-white.png';
import Logo from '../../static/assets/img/logo-white.png';
import './sidebarnav.css';

const SidebarNav = () => {
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

  const subArray = [];
  return (
  // <div className="relative flex min-h-screen outline outline-red-500">

    // <aside className="flex flex-col h-screen bg-link text-white space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0">
    <aside className="fixed w-1/5 min-h-screen inset-0 bg-link text-white">
      <div className="logo-wrapper">
        <Link
          to="/dashboard/*"
          className="inline-block xl:ml-9 xl:mt-9 border border-red-800"
        >
          <img src={Logo} alt="brand-logo" className="xl:w-40 xl:h-10" />
        </Link>
      </div>

      <nav className="mt-6 ml-2">
        <ul className="list-wrapper">
          <li
            className={`flex items-center space-x-3 py-3 px-4 rounded transition duration-200 ${
              defaultHome === 'dashboard' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('dashboard');
            }}
            role="presentation"
          >
            <BiHomeAlt className="xl:w-6 xl:h-7" />
            <Link
              // to="/dashboard"
              to="/layout/dashboard"
              className="inline-block rounded font-medium leading-6 text-indigo-100 "
            >
              Dashboard
            </Link>
          </li>

          <li
            className={`flex flex-col space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'institutions' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('institutions');
            }}
            role="presentation"
          >
            <span className="flex justify-between items-center space-x-3 w-full">
              <span className="flex flex-row items-center">
                <FiBarChart2 className="xl:w-6 xl:h-7" />
                <Link
                  // to="/dashboard/institutions"
                  to="/layout/institutions"
                  className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                  activeClassName="bg-linkDeep"
                >
                  Institutions
                  {' '}
                </Link>
              </span>
              <CgChevronDown
                onClick={handleMenuDrawer}
                className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer"
              />
            </span>
            <ul
              className={
                toggleDrawer ? ' flex flex-col sub-menu' : 'sub-menu-deactivate'
              }
            >
              <li className="sub-item px-6">
                <Link to="/dashboard">Item 1</Link>
              </li>
              <li className="sub-item px-6">
                <Link to="/dashboard">Item 2</Link>
              </li>
            </ul>
          </li>

          <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 rounded transition duration-200 ${
              defaultHome === 'products' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('products');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <ImStack className="xl:w-6 xl:h-7" />
              <Link
                // to="/dashboard/products"
                to="/layout/products"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-linkDeep"
              >
                Products
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li>

          <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'users' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('users');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <BsCheck2Square className="xl:w-6 xl:h-7" />
              <Link
                to="/dashboard/users"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-linkDeep"
              >
                Users
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li>

          <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'accounts' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('accounts');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <FiFlag className="xl:w-6 xl:h-7" />
              <Link
                to="/dashboard/accounts"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-linkDeep"
              >
                Accounts
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li>

          <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'reports' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('reports');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <BiFile className="xl:w-6 xl:h-7" />
              <Link
                to="/dashboard/reports"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-linkDeep"
              >
                Reports
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li>

          <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'ce-id' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('ce-id');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <AiOutlineIdcard className="xl:w-6 xl:h-7" />
              <Link
                to="/dashboard/ce-id"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-linkDeep"
              >
                CE-ID
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li>

          <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'profile' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('profile');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <FiUser className="xl:w-6 xl:h-7" />
              <Link
                to="/dashboard/profile"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-linkDeep"
              >
                Profile
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li>

          <li
            className={`flex items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'log out' ? 'bg-linkDeep' : ''
            }`}
            onClick={() => {
              switchDefaultHome('log out');
            }}
            role="presentation"
          >
            <MdLogout className="xl:w-6 xl:h-7" />
            <Link
              to="/"
              className="inline-block rounded font-medium leading-6 text-indigo-100 "
              activeClassName="bg-linkDeep"
            >
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </aside>

  // <article className="flex-1">
  //   <header className="bg-white shadow px-2 py-4">Header</header>
  //   <section className="p-8">Content</section>
  // </article>
  // </div>
  );
};

export default SidebarNav;
