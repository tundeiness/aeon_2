/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Navigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthButton = ({
  buttonText, loading, condition,
}) => {
  const test = 0;
  return (
    <button
      className="sign-in-button w-full block bg-authBtn text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none"
      type={condition ? 'button' : 'submit'}
    >
      {buttonText}
    </button>
  );
};

export const BackToList = ({ text }) => {
  const test = 0;
  return (
    <div className="inline-block px-1 mb-3">
      <Link
        className="flex flex-row items-center justify-start bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white py-2 pl-2 pr-3 rounded-md font-medium text-base"
        to="/institution"
      >
        <BiChevronLeft />
        {' '}
        {text}
      </Link>
    </div>
  );
};

export const ActiveBtn = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-activeBtn px-3 py-1 rounded-full text-white"
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

export const Search = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-red-400 px-3 py-1 rounded-md text-white"
        type="button"
      >
        Search
      </button>
    </>
  );
};

export const Export = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-red-400 px-3 py-1 rounded-md text-white"
        type="button"
      >
        Export
      </button>
    </>
  );
};

export const GetData = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-liteBlue px-3 py-2.5 rounded-md text-white uppercase w-full"
        type="button"
      >
        Get data
      </button>
    </>
  );
};

export const GoButton = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-buttonTwo px-4 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Go
      </button>
    </>
  );
};

export const FilterButton = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-liteBlue px-5 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Filter
      </button>
    </>
  );
};

export const SearchButton = () => {
  const test = 0;
  return (
    <>
      <button
        className="bg-buttonTwo px-4 py-3 rounded-md text-white font-medium text-sm"
        type="button"
      >
        Search
      </button>
    </>
  );
};
AuthButton.propTypes = {
  // buttonType: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
