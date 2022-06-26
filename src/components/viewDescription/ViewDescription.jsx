/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export const ViewDescription = ({
  headingRight, contentRight, headingLeft, contentLeft,
}) => {
  const test = 0;
  return (
    <>
      <div className="bg-white flex flex-row justify-between px-4 py-5">
        <dd className="inline-block mt-1text-xl text-black font-medium  sm:mt-0 sm:col-span-2">
          {headingLeft}
        </dd>
        <dd className="block w-1/3 mt-1 text-xl text-black font-medium sm:mt-0 sm:col-span-2">
          {headingRight}
        </dd>
      </div>
      <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
        <dd className="inline-block mt-1  sm:mt-0 sm:col-span-2">
          {contentLeft}
        </dd>
        <dd className="block w-1/3 mt-1  sm:mt-0 sm:col-span-2">
          {contentRight}
        </dd>
      </div>
    </>
  );
};

export const TextAreaDescription = ({
  headingRight,
  contentRight,
  headingLeft,
  contentLeft,
}) => {
  const test = 0;
  return (
    <>
      <div className="bg-white flex flex-row justify-between px-4 py-5">
        <dd className="outline outline-red-500 block w-28 mt-1 text-xl text-black font-medium sm:mt-0 sm:col-span-2">
          {headingLeft}
        </dd>
        <dd className="outline outline-red-500 block w-1/3 mt-1 text-xl text-black font-medium sm:mt-0 sm:col-span-2">
          {headingRight}
        </dd>
      </div>
      <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
        <dd className="outline outline-red-500 inline-block mt-1 text-xl text-black font-medium sm:mt-0 sm:col-span-2">
          {contentLeft}
        </dd>
        <dd className="outline outline-red-500 block w-1/3 mt-1 text-xl text-black font-medium sm:mt-0 sm:col-span-2">
          {contentRight}
        </dd>
      </div>
    </>
  );
};

export const HeadingDisplayRow = ({
  classText,
  title,
  content,
}) => {
  const test = 0;
  return (
    <>
      <div className={`${classText}-block flex flex-row`}>
        <div className="w-1/4 py-4 bg-blue-400">
          <dd className="block text-md font-medium pl-10 text-white">
            {title}
          </dd>
        </div>
        <div className="w-3/4 py-4 bg-gray-100">
          <dd className="block text-md font-normal text-black pl-12">
            {content}
          </dd>
        </div>
      </div>
    </>
  );
};

export const DataDisplayRow = ({ classText, title, content }) => {
  const test = 0;
  return (
    <>
      <div className={`${classText}-block flex flex-row`}>
        <div className="w-1/4 py-4 bg-gray-100">
          <dd className="block text-md font-medium pl-10 text-gray-900">
            {title}
          </dd>
        </div>
        <div className="w-3/4 py-4 bg-white">
          <dd className="block text-md font-normal text-black pl-12">
            {content}
          </dd>
        </div>
      </div>
    </>
  );
};

export const TextDisplayRow = ({ classText, title, content }) => {
  const test = 0;
  return (
    <>
      <div className={`${classText}-block flex flex-row`}>
        <div className="w-1/4 py-5 bg-gray-100">
          <dd className="block text-md font-medium pl-10 text-gray-900">
            {title}
          </dd>
        </div>
        <div className="w-3/4 py-2 bg-white">
          <dd className="block text-md font-normal text-black pl-12">
            {content}
          </dd>
        </div>
      </div>
    </>
  );
};
