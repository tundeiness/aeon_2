/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { nanoid } from '@reduxjs/toolkit';
// import { uuid } from 'uuidv4';
import { Link, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort, BsDashSquare, BsCheck2Square } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import SupportButton from '../support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import Data from '../../data/MOCK_DATA.json';
import Modal from '../Modal/Modal';
import DeleteInstitution from '../../pages/institutions/deleteInstitution/DeleteInstitution';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import {
  GoButton,
  FilterButton,
  SearchButtonUser,
  AddUserButton,
} from '../Buttons/buttonCollections';
import {
  selectAllUsers,
  getUserStatus,
  getUserError,
  getAllUsers,
} from '../../redux/features/userSlice';
// import InstitutionExcerpt from './InstitutionExcerpt';

const UtilizationList = () => {
  const { activeModal, setActiveModal } = useStateContext();
  // const { loading, institution } = useSelector((state) => ({
  //   ...state.institution,
  // }));

  // const institution = useSelector((state) => state.institution.institution);
  const institution = useSelector(selectAllUsers);
  const institutionStatus = useSelector(getUserStatus);
  const institutionError = useSelector(getUserError);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [mockData, setMockData] = useState(institution[0]);
  const [pageNum, setPageNum] = useState(0);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  console.log(institution);

  useEffect(() => {
    if (institutionStatus === 'idle') {
      dispatch(getAllUsers());
    }
  }, [dispatch, institutionStatus]);

  // <InstitutionExcerpt  onClick={() => setIsOpen(true)}/>
  // const id = uuidv4();

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = institution
    .slice(dataPageVisited, dataPageVisited + dataPerPage)
    .map((datum, idx) => (
      // <InstitutionExcerpt onClick={() => setIsOpen(true)} key={datum.id} institution={institution} />
      <tr key={uuidv4()}>
        <td className="text-sm leading-5 py-4 px-4">{idx + 1}</td>
        <td className="py-4 uppercase text-center">{`${datum.lastname} ${datum.othernames}`}</td>
        <td className="py-4 pr-4 pl-5">{datum.email}</td>
        <td className="py-4 pl-8">
          {datum.status === 'Active' ? (
            <span className="flex items-center bg-green-300 py-0.3 px-0.2 w-14 rounded-xl text-white">
              <GoPrimitiveDot className="text-white" />
              {datum.status}
            </span>
          ) : (
            <span className="flex items-center bg-red-400 py-0.3 px-0.2 w-16 rounded-xl text-white">
              <GoPrimitiveDot className="text-white" />
              {datum.status}
            </span>
          )}
        </td>
        <td className="py-4 pl-12">
          <span className="inline-block text-gray-900 py-0.5 px-0.4 w-16 rounded-lg text-center hover:cursor-pointer">
            {datum.institutionCode}
          </span>
        </td>
        <td className="py-4 pl-10">
          <span className="inline-block text-gray-900 py-0.5 px-0.4 w-16 rounded-lg text-center hover:cursor-pointer">
            {datum.roleCode}
          </span>
        </td>
        <td className="py-4 px-6">
          <span className="flex justify-between">
            <button type="button">
              <FiSearch className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
            </button>
            {datum.status === 'Active' ? (
              <span className="flex items-center">
                <BsDashSquare className="text-iconRed w-4 h-4 font-bold" />
              </span>
            ) : (
              <span className="flex items-center">
                <BsCheck2Square className="text-iconGreen w-5 h-5 font-bold" />
              </span>
            )}
            <button type="button">
              <FiEdit2 className="pen-icon hover:cursor-pointer w-5 h-5 text-penColor" />
            </button>
          </span>
        </td>
      </tr>
    ));

  const pagingCount = Math.ceil(institution?.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  const renderSelection = () => {
    let content;
    switch (institutionStatus) {
      case 'loading':
        content = <p>Loading data ...</p>;
        break;
      case 'succeeded':
        content = displayData;
        break;
      case 'failed':
        content = <p>Network Error </p>;
        break;
      default:
        content = displayData;
        break;
    }

    return content;
  };

  //  switch (institutionStatus) {
  //    case "loading": // if (x === 'value1')
  //      return <p>Loading data ...</p>;
  //    case "succeeded": // if (x === 'value2')
  //      return displayData;
  //    case "failed":
  //      return <p>Network Error </p>;
  //    default: {
  //      return displayData;
  //    }
  //  }

  return (
    <>
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between mb-2">
              <h1 className="institution-header mb-3 font-medium text-3xl">
                All Users
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="mb-12" />
            <div className="flex flex-row justify-end w-full">
              <div className="w-3/5">
                <div className="flex flex-row justify-around">
                  <div className="search-wrapper w-3/5 relative my-2">
                    <FiSearch className="absolute z-10 top-3.5 left-2 text-xl" />
                    <input
                      type="search"
                      placeholder="Search"
                      className="relative pl-8 py-3 rounded-lg w-full outline outline-gray-300"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <SearchButtonUser />
                  </div>
                  <div className="add-user-button w-auto">
                    <AddUserButton />
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-3 mt-2" />
            <div className="flex flex-row w-full mb-4">
              <div className="w-1/3 px-1 mb-6 md:mb-0">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="institution-name"
                >
                  Username
                  <input
                    className="block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white "
                    id="institution-name"
                    type="text"
                    placeholder="Enter Username"
                  />
                </label>
              </div>
              <div className="w-1/3 px-1 mb-6 md:mb-0">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="category"
                >
                  Status
                  {' '}
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                >
                  <option value="" label="Select Status">
                    Select Status
                  </option>
                  <option value="PrePaid" label=" PrePaid">
                    PrePaid
                  </option>
                  <option value="PostPaid" label="PostPaid">
                    PostPaid
                  </option>
                </select>
              </div>
              <div className="w-1/3 px-1 mb-6 md:mb-0">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="category"
                >
                  Select Role
                  {' '}
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                >
                  <option value="" label="Select Role">
                    Select Role
                  </option>
                  <option value="PrePaid" label=" PrePaid">
                    PrePaid
                  </option>
                  <option value="PostPaid" label="PostPaid">
                    PostPaid
                  </option>
                </select>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="name-list">
                <table className="table-fixed w-full text-xs">
                  <thead className=" bg-gray-50 text-xs capitalize">
                    <tr>
                      <th
                        scope="col"
                        className="w-12 text-gray-500 py-4 px-3 text-left"
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
                        className=" text-gray-500 py-4 pl-4 text-center w-60"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className=" flex items-center  text-gray-500 py-4 pl-10 "
                      >
                        Status
                        {/* <span>{ArrowDownIcon.symbol}</span> */}
                        <BsArrowDownShort className="inline-block" />
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500 py-4 text-center w-42"
                      >
                        Institution
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500  py-4 pl-14 text-left"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500 py-4 text-left"
                      />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {/* {(() => {
                      switch (institutionStatus) {
                        case 'loading': // if (x === 'value1')
                          return <p>Loading data ...</p>;
                        case 'succeeded': // if (x === 'value2')
                          return displayData;
                        case 'failed':
                          return <p>Network Error </p>;
                        default: {
                          return displayData;
                        }
                      }
                    })()} */}
                    {renderSelection()}
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
      <DeleteModal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default UtilizationList;
