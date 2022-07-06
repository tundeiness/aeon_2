/* eslint-disable no-unused-vars */
import React from 'react';
import { SearchElement } from '../../data/Dummy';

const NoData = () => {
  const test = 0;
  return (
    <div className="bg-white p-6 rounded-lg shadow-xs mb-10 border border-gray-200">
      <span className="inline-block">
        <span className="inline-block">
          <SearchElement />
        </span>
      </span>
      <h3 className="text-base font-medium mb-4 text-gray-800">
        No Data for Table
      </h3>
      <p className="text-buttonTwo font-normal text-xs"> Your search did not match any data. Please try again or search with new parameters</p>
    </div>
  );
};

export default NoData;
