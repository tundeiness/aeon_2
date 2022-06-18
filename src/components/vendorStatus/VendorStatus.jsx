/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  FiRefreshCcw,
} from 'react-icons/fi';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import './vendorstatus.css';

const VendorStatus = ({ vendor, percent, stat }) => {
  const [serverStatus, setServerStatus] = useState(null);
  const [activeServer, setActiveServer] = useState(null);
  const today = new Date();
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const month = today.getMonth();
  const date = `${
    monthArray[month]
  } ${today.getDate()} ${today.getFullYear()}`;

  useEffect(() => {
    setServerStatus(stat);
    setActiveServer(stat);
  }, [serverStatus]);
  return (
    <div className="bg-white rounded-xl shadow border p-5 w-1/3">
      <header className="flex justify-between items-center">
        <p className="xl:mr-2 leading-5 font-medium text-base">Total verified IDs</p>
        <FiRefreshCcw className="xl:mx-2" />
      </header>
      <h5 className="text-3xl font-bold mb-4 mt-6">{vendor}</h5>
      <footer className="flex justify-between items-end text-gray-700 text-sm">
        <p className="flex items-center">
          {activeServer === stat ? (
            <BsArrowUpShort className="inline-block text-xl font-extrabold text-green-500" />
          ) : (
            <BsArrowDownShort className="inline-block text-xl font-extrabold text-red-500" />
          )}
          {' '}
          <span>
            {' '}
            <span>{percent}</span>
            {' '}
            vs last month
          </span>
        </p>
        <button
          type="button"
          className={`flex items-center text-white p-2 rounded-md ${
            serverStatus === stat ? 'bg-green-700' : 'bg-red-700'
          }`}
        >
          <GoPrimitiveDot className="text-white inline-block mr-2" />
          {serverStatus === stat ? 'ONLINE' : 'OFFLINE'}
        </button>
      </footer>
    </div>
  );
};

export default VendorStatus;
