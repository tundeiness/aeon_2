/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import './institutions.css';
import React, { useState } from 'react';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Routes, Link, Outlet } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Data from '../../../data/MOCK_DATA.json';

const Institutions = () => {
  const test = 0;

  const [mockData, setMockData] = useState(Data);
  const [pageNum, setPageNum] = useState(0);

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = mockData
    .slice(dataPageVisited, dataPageVisited + dataPerPage)
    ?.map((datum) => (
      <tr key={datum['S/N']}>
        <td className="text-sm leading-5 py-4 px-3">{datum['S/N']}</td>
        <td className="py-4 uppercase text-center">{datum.Name}</td>
        <td className="py-4 pr-4 pl-20">
          {datum.Status === 'Active' ? (
            <span className="flex items-center bg-green-300 py-0.3 px-0.2 w-14 rounded-xl text-white">
              <GoPrimitiveDot className="text-white" />
              {datum.Status}
            </span>
          ) : (
            <span className="flex items-center bg-red-400 py-0.3 px-0.2 w-16 rounded-xl text-white">
              <GoPrimitiveDot className="text-white" />
              {datum.Status}
            </span>
          )}
        </td>
        <td className="py-4 pl-4">{datum.Website}</td>
        <td className="py-4 pl-10">
          <span className="inline-block text-textTeams py-0.5 px-0.4 w-16 bg-indigo-50 rounded-lg text-center hover:cursor-pointer">
            {datum.Team}
          </span>
        </td>
        <td className="py-4 px-6">
          <span className="flex justify-between">
            <FiSearch
              className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor"

            />
            <RiDeleteBinLine
              className="delete-icon hover:cursor-pointer w-5 h-5 text-binColor"

            />
            <FiEdit2
              className="pen-icon hover:cursor-pointer w-5 h-5 text-penColor"

            />
          </span>
        </td>
      </tr>
    ));

  // console.log(displayData);
  const pagingCount = Math.ceil(mockData?.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };
  return (
  // <article className="flex-1">

    <article className="w-4/5 ml-auto">
      <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
        <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
          <h1 className="institution-header mb-3">Institutions </h1>
          <hr />
          <div className="search-wrapper relative outline outline-red-500">
            <FiSearch className="absolute z-10 top-3.5 left-2 text-xl" />
            <input
              type="search"
              placeholder="Search"
              className="relative py-3 pl-8 w-1/4 rounded-lg outline outline-gray-300"
            />
          </div>
          <div className="name-list">
            <table className="table-fixed w-full text-xs shadow-md">
              <thead className=" bg-gray-50 text-xs capitalize">
                <tr>
                  <th
                    scope="col"
                    className="w-12 text-gray-500 py-4 px-2 text-left"
                  >
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="w-52 text-gray-500 py-4 text-center"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" flex items-center  text-gray-500 py-4 pl-20"
                  >
                    Status
                    {' '}
                    <BsArrowDownShort />
                  </th>
                  <th
                    scope="col"
                    className=" text-gray-500 py-4 pl-4 text-left"
                  >
                    Website
                  </th>
                  <th
                    scope="col"
                    className=" text-gray-500  py-4 pl-10 text-left"
                  >
                    Teams
                  </th>
                  <th scope="col" className=" text-gray-500 py-4 text-left" />
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-300 outline outline-blue-500">
                {displayData}
              </tbody>
              <tbody className="outline outline-black">
                {' '}
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageCount={pagingCount}
                  onPageChange={changePage}
                  containerClassName="pagination-button"
                  previousLinkClassName="previousButton"
                  nextLinkClassName="nextButton"
                  disabledClassName="paginationDisabled"
                  activeClassName="paginationActive"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Institutions;
