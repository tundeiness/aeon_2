/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CgDanger, CgChevronDown, CgChevronUp } from 'react-icons/cg';
import {
  FiSearch, FiEdit2, FiBarChart2, FiFlag, FiUser,
} from 'react-icons/fi';
import {
  BsArrowDownShort,
  BsCheck2Square,
  BsArrowUpShort,
} from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine, RiCheckboxIndeterminateLine } from 'react-icons/ri';
import { BiHomeAlt, BiFile, BiPlus } from 'react-icons/bi';
import { ImStack } from 'react-icons/im';
import { MdLogout, MdOutlineIndeterminateCheckBox } from 'react-icons/md';
import { AiOutlineIdcard, AiOutlineCalendar } from 'react-icons/ai';
import { IoWarningOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineEye } from 'react-icons/hi';

import { logout } from '../redux/features/auth/authSlice';

export const Dummy = () => {
  const test = 0;
  return (
    <div>dummy</div>
  );
};

export const SearchElement = () => (
  <>
    {' '}
    <FiSearch className="text-lg text-buttonTwo" />
  </>
);

export const CalendarElement = () => (
  <span className="inline-block absolute top-10 left-3 z-10">
    {' '}
    <AiOutlineCalendar />
  </span>
);

export const DangerIcon = {
  title: 'Danger',
  symbol: <CgDanger />,
};

export const IndeterminateIcon = {
  title: 'Indeterminate',
  symbol: <MdOutlineIndeterminateCheckBox />,
};

export const CircleCheckIcon = {
  title: 'CircleCheck',
  symbol: <IoMdCheckmarkCircleOutline />,
};

export const WarningIcon = {
  title: 'Warning',
  symbol: <IoWarningOutline />,
};

export const PlusIcon = {
  title: 'Add',
  symbol: <BiPlus />,
};

export const SearchIcon = [{
  title: 'Search',
  symbol: <FiSearch />,
}];

export const ArrowDownIcon = [{
  title: 'ArrowDown',
  symbol: <BsArrowDownShort />,
}];

export const DotIcon = [{
  title: 'Dot',
  symbol: <GoPrimitiveDot />,
}];

export const SquareCheckIcon = [
  {
    title: 'SquareCheck',
    symbol: <BsCheck2Square />,
  },
];

export const DeleteIcon = [{
  title: 'Delete',
  symbol: <RiDeleteBinLine />,
}];

export const CreateIcon = [{
  title: 'Create',
  symbol: <FiEdit2 />,
}];

export const EyeIcon = [
  {
    title: 'View',
    symbol: <HiOutlineEye />,
  },
];

export const iconArray = [
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

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <BiHomeAlt key="0" className="xl:w-6 xl:h-7" />,
  },
  {
    title: 'Institutions',
    path: '/institutions',
    icon: <FiBarChart2 key="1" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      {
        title: 'Create Institution',
        path: '/institutions/create-institution',
        icon: <GoPrimitiveDot />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <ImStack key="2" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      {
        title: 'Create Product',
        path: '/products/create-product',
        icon: <GoPrimitiveDot />,
      },
    ],
  },
  {
    title: 'Users',
    path: '/users',
    icon: <BsCheck2Square key="3" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      {
        title: 'Create User',
        path: '/users/create-user',
        icon: <GoPrimitiveDot />,
      },
    ],
  },
  {
    title: 'Accounts',
    path: 'accounts/daily-utilization',
    icon: <FiFlag key="4" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      {
        title: 'Posts',
        path: '/accounts/posts',
        icon: <GoPrimitiveDot />,
      },
      {
        title: 'Statement',
        path: '/accounts/account-statement',
        icon: <GoPrimitiveDot />,
      },
      // {
      //   title: 'Daily Utilisation',
      //   path: '/accounts/daily-utilisation',
      //   icon: <GoPrimitiveDot />,
      // },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <BiFile key="5" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      {
        title: 'Transaction',
        path: '/reports/transaction',
        icon: <GoPrimitiveDot />,
      },
      {
        title: 'API Usage',
        path: '/reports/api-usage',
        icon: <GoPrimitiveDot />,
      },
    ],
  },
  {
    title: 'CE-ID',
    path: '/ce-id',
    icon: <AiOutlineIdcard key="6" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      // {
      //   title: 'Identity-Check',
      //   path: '/ce-id/identity-check',
      //   icon: <GoPrimitiveDot />,
      // },
      {
        title: 'Credit-Report',
        path: '/ce-id/credit-report',
        icon: <GoPrimitiveDot />,
      },
      {
        title: 'OCR',
        path: '/ce-id/ocr',
        icon: <GoPrimitiveDot />,
      },
      // {
      //   title: 'Business-Name',
      //   path: '/ce-id/business-name',
      // },
      // {
      //   title: 'KYC',
      //   path: '/ce-id/kyc',
      //   icon: <GoPrimitiveDot />,
      // },
      // {
      //   title: 'Bank Statement',
      //   path: '/ce-id/statement',
      //   icon: <GoPrimitiveDot />,
      // },
      // {
      //   title: 'Credit Report',
      //   path: '/ce-id/report',
      //   icon: <GoPrimitiveDot />,
      // },
      // {
      //   title: 'OCR',
      //   path: '/ce-id/ocr',
      //   icon: <GoPrimitiveDot />,
      // },
    ],
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <FiUser key="7" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    subnav: [
      {
        title: 'Update KYB',
        path: '/profile/update-kyb',
        icon: <GoPrimitiveDot />,
      },
      {
        title: 'Change Password',
        path: '/profile/change-password',
        icon: <GoPrimitiveDot />,
      },
    ],
  },
];
