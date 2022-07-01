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
import { AiOutlineIdcard } from 'react-icons/ai';
import { IoWarningOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const Dummy = () => {
  const test = 0;
  return (
    <div>dummy</div>
  );
};

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
        title: 'Create',
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
    // subnav: [
    //   {
    //     title: 'Create',
    //     path: '/layout/institution/create-institution',
    //     icon: <GoPrimitiveDot />,
    //   },
    // ],
  },
  {
    title: 'Users',
    path: '/users',
    icon: <BsCheck2Square key="3" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    // subnav: [
    //   {
    //     title: 'Create',
    //     path: '/layout/institution/create-institution',
    //     icon: <GoPrimitiveDot />,
    //   },
    // ],
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: <FiFlag key="4" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    // subnav: [
    //   {
    //     title: 'Create',
    //     path: '/layout/institution/create-institution',
    //     icon: <GoPrimitiveDot />,
    //   },
    // ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <BiFile key="5" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    // subnav: [
    //   {
    //     title: 'Create',
    //     path: '/layout/institution/create-institution',
    //     icon: <GoPrimitiveDot />,
    //   },
    // ],
  },
  {
    title: 'CE-ID',
    path: '/ce-id',
    icon: <AiOutlineIdcard key="6" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    // subnav: [
    //   {
    //     title: 'Create',
    //     path: '/layout/institution/create-institution',
    //     icon: <GoPrimitiveDot />,
    //   },
    // ],
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <FiUser key="7" className="xl:w-6 xl:h-7" />,
    iconClosed: <CgChevronDown />,
    iconOpen: <CgChevronUp />,
    // subnav: [
    //   {
    //     title: 'Create',
    //     path: '/layout/institution/create-institution',
    //     icon: <GoPrimitiveDot />,
    //   },
    // ],
  },
  {
    title: 'Log Out',
    path: '/log-out',
    icon: <MdLogout key="8" className="xl:w-6 xl:h-7" />,
  },
];
