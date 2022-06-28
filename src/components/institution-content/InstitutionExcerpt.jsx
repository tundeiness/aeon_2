/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
// import { BsArrowDownShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
// import SupportButton from '../support/support';

const InstitutionExcerpt = ({ institution, onClick }) => {
  const test = 0;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr>
      <td className="text-sm leading-5 py-4 px-3">{institution.id}</td>
      <td className="py-4 uppercase text-center">{institution.name}</td>
      <td className="py-4 pr-4 pl-20">
        {institution.status === 'Active' ? (
          <span className="flex items-center bg-green-300 py-0.3 px-0.2 w-14 rounded-xl text-white">
            <GoPrimitiveDot className="text-white" />
            {institution.status}
          </span>
        ) : (
          <span className="flex items-center bg-red-400 py-0.3 px-0.2 w-16 rounded-xl text-white">
            <GoPrimitiveDot className="text-white" />
            {institution.status}
          </span>
        )}
      </td>
      <td className="py-4 pl-4">{institution.websiteUrl}</td>
      <td className="py-4 pl-10">
        <span className="inline-block text-textTeams py-0.5 px-0.4 w-16 bg-indigo-50 rounded-lg text-center hover:cursor-pointer">
          {institution.category}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="flex justify-between">
          <button type="button">
            <FiSearch className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
          </button>
          <RiDeleteBinLine
            className="delete-icon hover:cursor-pointer w-5 h-5 text-binColor"
            onClick={onClick}
          />
          <button type="button">
            <FiEdit2 className="pen-icon hover:cursor-pointer w-5 h-5 text-penColor" />
          </button>
        </span>
      </td>
    </tr>
  );
};

export default InstitutionExcerpt;
