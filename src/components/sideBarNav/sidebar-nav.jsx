/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation, Navlink } from 'react-router-dom';
import { BiHomeAlt, BiFile } from 'react-icons/bi';
import { FiBarChart2, FiFlag, FiUser } from 'react-icons/fi';
import { ImStack } from 'react-icons/im';
import { BsCheck2Square } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { CgChevronDown } from 'react-icons/cg';
import Submenu from './Submenu/SubMenu';
import { SideBarData } from '../../data/Dummy';
// import Logo from '../../static/assets/img/logo-white.png';
import Logo from '../../static/assets/img/logo-white.png';
import './sidebarnav.css';

// const NavLink = ({
//   to, className, activeClassName, inactiveClassName, ...rest
// }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   const allClassNames = className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
//   return (
//     <link className={allClassNames} to={to} {...rest} />);
// };

const SidebarNav = () => {
  const location = useLocation();
  const isActive = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [defaultHome, setDefaultHome] = useState('dashboard');
  const [pathlink, setPathlink] = useState(isActive);

  const transformIcon = 'w-4 h-4 inline-block cursor-pointer origin-center rotate-180';

  const switchDefaultHome = (linkName) => {
    setDefaultHome(linkName);
  };

  const handleMenuDrawer = () => {
    setIsOpen(!isOpen);
  };

  console.log(isActive);

  return (
  // <div className="relative flex min-h-screen outline outline-red-500">

    // <aside className="flex flex-col h-screen bg-link text-white space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0">
    <aside className="fixed w-1/5 min-h-screen inset-0 bg-liteBlue text-white">
      <div className="logo-wrapper">
        <Link
          to="/dashboard/*"
          className="inline-block xl:ml-9 xl:mt-9"
        >
          <img src={Logo} alt="brand-logo" className="xl:w-40 xl:h-10" />
        </Link>
      </div>

      <nav className="mt-6 ml-2">
        <ul className="list-wrapper">
          {SideBarData.map((child, _index) => (
            <li
              key={child.id}
              className="flex flex-col w-[95%] space-x-1 mb-2 hover:bg-authBtn rounded transition duration-200"
              role="presentation"
            >
              <Submenu item={child} key={child.id} className="py-2" />
            </li>
          ))}
          {/* <li
            className={`flex items-center space-x-3 py-3 px-4 hover:bg-authBtn rounded transition duration-200 ${
              pathlink === '/layout/dashboard' ? 'bg-authBtn' : ''
            }`}
            role="presentation"
          >
            <span className="flex justify-between items-center space-x-3">
              <span className="flex flex-row items-center">
                <BiHomeAlt className="xl:w-6 xl:h-7" />
                <Link
                  to="/layout/dashboard"
                  className={`inline-block rounded font-medium leading-6 transition duration-200 text-indigo-100 ml-3${
                    pathlink === '/layout/dashboard' ? 'bg-authBtn' : ''
                  }`}
                  onClick={() => {
                    switchDefaultHome('dashboard');
                  }}
                >
                  Dashboard
                </Link>
              </span>
            </span>
          </li> */}

          {/* <li> */}
          {/* <span className="relative flex flex-row items-center">
              <FiBarChart2 className="xl:w-6 xl:h-7" />
              <Link
                to="/layout/institutions"
                className={`dropdown-toggle inline-block rounded font-medium leading-6 transition duration-200 ease-in-out text-indigo-100 ml-3 mr-24 ${
                  pathlink === '/layout/institutions' ? 'bg-authBtn' : ''
                }`}
                onClick={() => {
                  switchDefaultHome('institution');
                }}
              >
                Institutions
                {' '}
              </Link>
              <CgChevronDown
                onClick={() => setIsOpen(!isOpen)}
                className={`sub-arrow text-white w-4 h-4 inline-block cursor-pointer ${
                  isOpen
                    ? transformIcon
                    : 'sub-arrow text-white w-4 h-4 inline-block cursor-pointer'
                }`}
              />
            </span> */}
          {/* </span> */}
          {/* <ul
              className={
                isOpen ? ' flex flex-col sub-menu' : 'sub-menu-deactivate'
              }
            >
              <li className="sub-item px-6">
                <Link
                  to="/layout/institutions/create-institution"
                  className={`sub-link ${
                    pathlink === '/layout/institutions/create-institution'
                    && isOpen
                      ? 'bg-white'
                      : ''
                  }`}
                  onClick={() => {
                    switchDefaultHome('create');
                  }}
                >
                  Create
                </Link>
              </li>
            </ul> */}
          {/* {isOpen && (
              <ul
                className={`origin-top absolute right-0 mt-11 w-[100%] rounded-md ${
                  pathlink === '/layout/institutions/create-institution' ? 'bg-white' : ''
                }`}
              >
                <li
                  className="sub-item group inline-block px-6 py-1.5"
                >
                  <Link
                    to="/layout/institutions/create-institution"
                    className="sub-link text-center group-bg:white "
                    onClick={() => {
                      switchDefaultHome('create');
                    }}
                  >
                    Create
                  </Link>
                </li>
              </ul>
            )} */}
          {/* </li> */}

          {/* <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 rounded transition duration-200 ${
              defaultHome === 'products' ? 'bg-authBtn' : ''
            }`}
            onClick={() => {
              switchDefaultHome('products');
            }}
            role="presentation"
          >
            <span className="flex flex-row items-center">
              <ImStack className="xl:w-6 xl:h-7" />
              <Link
                to="/layout/products"
                className="inline-block rounded font-medium leading-6 text-indigo-100 ml-3"
                activeClassName="bg-authBtn"
              >
                Products
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li> */}

          {/* <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'users' ? 'bg-authBtn' : ''
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
                activeClassName="bg-authBtn"
              >
                Users
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li> */}

          {/* <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'accounts' ? 'bg-authBtn' : ''
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
                activeClassName="bg-authBtn"
              >
                Accounts
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li> */}

          {/* <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'reports' ? 'bg-authBtn' : ''
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
                activeClassName="bg-authBtn"
              >
                Reports
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li> */}

          {/* <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'ce-id' ? 'bg-authBtn' : ''
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
                activeClassName="bg-authBtn"
              >
                CE-ID
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li> */}

          {/* <li
            className={`flex justify-between items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'profile' ? 'bg-authBtn' : ''
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
                activeClassName="bg-authBtn"
              >
                Profile
              </Link>
            </span>
            <CgChevronDown className="sub-arrow text-white w-4 h-4 inline-block cursor-pointer" />
          </li> */}

          {/* <li
            className={`flex items-center space-x-3 py-3 px-4 hover:bg-linkDeep rounded transition duration-200 ${
              defaultHome === 'log out' ? 'bg-authBtn' : ''
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
              activeClassName="bg-authBtn"
            >
              Log Out
            </Link>
          </li> */}
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
