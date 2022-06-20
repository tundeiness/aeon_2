/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Routes, Link, Outlet } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SupportButton from '../../components/support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import SidebarNav from '../../components/sideBarNav/sidebar-nav';
// import DeleteInstitution from './deleteInstitution/DeleteInstitution';
// import InstitutionList from '../../../components/institutionContent/InstitutionList';
import InstitutionList from '../../components/institution-content/InstitutionList';
import './products.css';
import Data from '../../data/MOCK_DATA.json';

const Products = () => {
  const test = 0;
  const { activeModal, setActiveModal } = useStateContext();

  const [mockData, setMockData] = useState(Data);
  const [pageNum, setPageNum] = useState(0);
  const [deactivateUser, setDeactivateUser] = useState(false);

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
            <button type="button">
              <FiSearch className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
            </button>
            <button
              type="button"
              // onClick={() => setActiveModal(true)}
              onClick={() => setActiveModal((prevActiveModal) => !prevActiveModal)}
            >
              <RiDeleteBinLine className="delete-icon hover:cursor-pointer w-5 h-5 text-binColor" />
            </button>
            <button type="button">
              <FiEdit2 className="pen-icon hover:cursor-pointer w-5 h-5 text-penColor" />
            </button>
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
    <>

      {/* <SidebarNav /> */}
      <InstitutionList />

      {/* {activeModal ? (
        <>
          <DeleteInstitution />
          <SidebarNav />
          <InstitutionList />
        </>
      ) : (
        <>
          <SidebarNav />
          <InstitutionList />
        </>
      )}
      {deactivateUser && <div>deactivate user Modal</div>} */}
      {/* <div>test</div> */}

      {/* <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between mb-2">
              <h1 className="institution-header mb-3 font-medium text-3xl">
                Institutions
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="mb-5" />
            <div className="search-wrapper relative">
              <FiSearch className="absolute z-10 top-2.5 left-2 text-xl" />
              <input
                type="search"
                placeholder="Search"
                className="relative py-2 pl-8 w-1/4 rounded-lg outline outline-gray-300"
              />
            </div>
            <div className="name-list">
              <table className="table-fixed w-full text-xs">
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
                <tbody className="divide-y divide-gray-300">
                  {displayData}
                </tbody>
              </table>
            </div>
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
              className="w-full flex flex-row justify-around py-3 text-xs shadow-md"
            />
          </div>
        </section>
      </article> */}
    </>
  );
};

export default Products;
