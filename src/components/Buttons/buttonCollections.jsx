/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Navigate, Link } from 'react-router-dom';

export const BackToList = () => {
  const test = 0;
  return (
    <div className="inline-block px-1 mb-3">
      <Link
        className="flex flex-row items-center justify-start bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white py-2 pl-2 pr-3 rounded-md font-medium text-base"
        to="/institution"
      >
        <BiChevronLeft />
        {' '}
        Back to list
      </Link>
    </div>
  );
};

export const ActiveBtn = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-green-400 px-3 py-1 rounded-md text-white"
        type="button"
      >
        Active
      </button>
    </>
  );
};

export const InActiveBtn = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-red-400 px-3 py-1 rounded-md text-white"
        type="button"
      >
        Inactive
      </button>
    </>
  );
};
