/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CgDanger } from 'react-icons/cg';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';

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

export const DeleteIcon = [{
  title: 'Delete',
  symbol: <RiDeleteBinLine />,
}];

export const CreateIcon = [{
  title: 'Create',
  symbol: <FiEdit2 />,
}];
