/* eslint-disable no-unused-vars */
import React from 'react';
import { SearchElement } from '../../data/Dummy';

const NoData = () => {
  const test = 0;
  return (
    <span className="bg-white p-6 rounded-lg shadow-xs mb-10 w-96 mt-52 ml-80 flex flex-col justify-center items-center">
      <span className="w-10 h-10 flex flex-row justify-center items-center rounded-full border border-outerRing bg-outerRing">
        <span className="flex flex-col items-center justify-center w-6 h-6 border border-indigo-100 rounded-full bg-indigo-100">
          <SearchElement />
        </span>
      </span>
      <h3 className="text-base font-medium mt-4 mb-4 text-gray-800">
        No Data for Table
      </h3>
      <p className="text-noDataText font-normal text-xs text-center">
        {' '}
        Your search did not match any data. Please try again or search with new
        parameters
      </p>
    </span>
  );
};

export default NoData;
