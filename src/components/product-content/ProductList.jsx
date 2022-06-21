/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import SupportButton from '../support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import Data from '../../data/MOCK_DATA.json';
import Modal from '../Modal/Modal';
import DeleteInstitution from '../../pages/institutions/deleteInstitution/DeleteInstitution';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import { GoButton, FilterButton, SearchButton } from '../Buttons/buttonCollections';

const ProductList = () => {
  const { activeModal, setActiveModal } = useStateContext();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mockData, setMockData] = useState(Data);
  const [pageNum, setPageNum] = useState(0);

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = mockData
    .slice(dataPageVisited, dataPageVisited + dataPerPage)
    ?.map((datum) => (
      <tr key={datum['S/N']}>
        <td className="text-sm leading-5 py-4 px-3">{datum.Code}</td>
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
        <td className="py-4 pl-4">{datum.Created}</td>
        <td className="py-4 pl-10">
          <span className="inline-block text-textTeams py-0.5 px-0.4 w-16 bg-indigo-50 rounded-lg text-center hover:cursor-pointer">
            {datum.Team}
          </span>
        </td>
        <td className="py-4 px-6">
          <span className="flex justify-between">
            <button type="button">
              {/* <span className="inline-block search-icon hover:cursor-pointer w-5 h-5 text-searchColor">
                {SearchIcon}
              </span> */}
              <FiSearch className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
            </button>
            {/* <Link
              // to="delete-institution"
              // state={{ background: location }}
              // onClick={() => handleModal('This is component modal content')}
              // to={{
              //   pathname: 'delete-institution',
              //   state: { background: location },
              // }}
              // onClick={() => setActiveModal((prevActiveModal) => !prevActiveModal)}
              // onClick={() => setActiveModal(true)}
            > */}
            <RiDeleteBinLine
              className="delete-icon hover:cursor-pointer w-5 h-5 text-binColor"
              onClick={() => setIsOpen(true)}
            />
            {/* <span className="delete-icon hover:cursor-pointer w-5 h-5 text-binColor">
                {DeleteIcon}
              </span> */}
            {/* </Link> */}
            {/* <button type="button">
              <FiEdit2 className="pen-icon hover:cursor-pointer w-5 h-5 text-penColor" />
            </button> */}
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
    <>
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between mb-2">
              <h1 className="institution-header mb-3 font-medium text-3xl capitalize">
                products
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="mb-5" />
            <div className="flex flex-row w-full outline outline-red-500">
              <div className="w-1/4">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email-address"
                >
                  threshold (NGN)
                  {' '}
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
                  type="text"
                  placeholder="0"
                  name="email-address"
                  id="email-address"
                />
              </div>

              <div className="w-1/4 px-3">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email-address"
                >
                  threshold (NGN)
                  {' '}
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
                  type="text"
                  placeholder="0"
                  name="email-address"
                  id="email-address"
                />
              </div>

              <div className="w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="status-category"
                >
                  status
                </label>
                <select
                  id="status-category"
                  name="status-category"
                  className="mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex flex-col justify-end w-1/4 outline outline-red-500">
                <SearchButton />
              </div>
              {/* <div className="flex flex-row justify-between w-1/2 py-4">
                <input
                  placeholder="Institution Name"
                  className="relative py-2 pl-3 w-1/2 rounded-lg border border-gray-200"
                />

                <div className="w-1/3 px-3 mb-6 md:mb-0">
                  <select
                    id="status-category"
                    name="status-category"
                    className="mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FilterButton />
                </div>
              </div>

              <div className="flex flex-row justify-end w-1/2 py-2">
                <div className="flex flex-row  items-center space-x-4 w-4/5">
                  <div className="search-wrapper w-full relative">
                    <FiSearch className="absolute z-10 top-3.5 left-2 text-xl" />
                    <input
                      type="search"
                      placeholder="Search"
                      className="relative pl-8 py-3 rounded-lg w-full outline outline-gray-300"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <GoButton />
                  </div>
                </div>
              </div> */}
            </div>

            <div className="border border-gray-200 rounded-lg">
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
                        {/* <span>{ArrowDownIcon.symbol}</span> */}
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
                      <th
                        scope="col"
                        className=" text-gray-500 py-4 text-left"
                      />
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
          </div>
        </section>
      </article>
      {/* <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DeleteInstitution />
      </Modal> */}
      <DeleteModal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default ProductList;
