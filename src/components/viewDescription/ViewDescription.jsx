/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ViewDescription = ({
  headingRight, contentRight, headingLeft, contentLeft,
}) => {
  const test = 0;
  return (
    <>
      <div className="bg-white flex flex-row justify-between px-4 py-5">
        <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {headingLeft}
        </dd>
        <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {headingRight}
        </dd>
      </div>
      <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
        <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {contentLeft}
        </dd>
        <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {contentRight}
        </dd>
      </div>
    </>
  );
};

export default ViewDescription;
