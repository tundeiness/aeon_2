/* eslint-disable no-unused-vars */
import './institutions.css';
import React, { useState } from 'react';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Routes, Link, Outlet } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Data from '../../../utils/MOCK_DATA.json';

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
        <td>{datum['S/N']}</td>
        <td>{datum.Name}</td>
        <td>
          {datum.Status === 'Active' ? (
            <span className="flex items-center bg-green-300 py-0.3 px-1 rounded-xl">
              <GoPrimitiveDot className="text-white" />
              {datum.Status}
            </span>
          ) : (
            <span className="flex items-center bg-red-400 py-0.3 px-1 rounded-xl">
              <GoPrimitiveDot className="text-white" />
              {datum.Status}
            </span>
          )}
        </td>
        <td>
          {datum.Website}
          )
        </td>
        <td>{datum.Team}</td>
        <td className="flex justify-between w-20 outline outline-red-500">
          <FiSearch />
          <RiDeleteBinLine />
          <FiEdit2 />
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
      <section className="pt-3 pl-4 h-full bg-link pb-5">
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
            Name list table
            <table className="table-auto">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th className="flex items-center">
                    Status
                    {' '}
                    <BsArrowDownShort />
                  </th>
                  <th>Website</th>
                  <th>Teams</th>
                </tr>
              </thead>
              <tbody className="outline outline-blue-500">
                {displayData}
                {/* <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageCount={pagingCount}
                  onPageChange={changePage}
                  containerClassName="pagination-button"
                  previousLinkClassName="previousButton"
                  nextLinkClassName="nextButton"
                  disabledClassName="paginationDisabled"
                  activeClassName="paginationActive"
                /> */}
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
