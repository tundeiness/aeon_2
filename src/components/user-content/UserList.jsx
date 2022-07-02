/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  getInstitution,
  selectAllInstitutions,
  getInstitutionStatus,
  getInstitutionError,
} from '../../redux/features/institutionSlice';
// import InstitutionExcerpt from './InstitutionExcerpt';

const UserList = () => {
  const { activeModal, setActiveModal } = useStateContext();
  // const { loading, institution } = useSelector((state) => ({
  //   ...state.institution,
  // }));

  // const institution = useSelector((state) => state.institution.institution);
  const institution = useSelector(selectAllInstitutions);
  const institutionStatus = useSelector(getInstitutionStatus);
  const institutionError = useSelector(getInstitutionError);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [mockData, setMockData] = useState(institution[0]);
  const [pageNum, setPageNum] = useState(0);
  const dispatch = useDispatch();

  console.log(institution);

  useEffect(() => {
    if (institutionStatus === 'idle') {
      dispatch(getInstitution());
    }
  }, [dispatch, institutionStatus]);

  // <InstitutionExcerpt  onClick={() => setIsOpen(true)}/>

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = institution
    .slice(dataPageVisited, dataPageVisited + dataPerPage)
    .map((datum, _idx) => (
      // <InstitutionExcerpt onClick={() => setIsOpen(true)} key={datum.id} institution={institution} />
      <tr key={datum.id}>
        <td className="text-sm leading-5 py-4 px-4">{datum.id}</td>
        <td className="py-4 uppercase text-center">{datum.name}</td>
        <td className="py-4 pr-4 pl-5">{datum.websiteUrl}</td>
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
          <span className="inline-block text-textTeams py-0.5 px-0.4 w-16 bg-indigo-50 rounded-lg text-center hover:cursor-pointer">
            {datum.category}
          </span>
        </td>
        <td className="py-4 pl-10">
          <span className="inline-block text-textTeams py-0.5 px-0.4 w-16 bg-indigo-50 rounded-lg text-center hover:cursor-pointer">
            {datum.category}
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
                        className="w-12 text-gray-500 py-4 px-3 text-left outline outline-red-500"
                      >
                        S/N
                      </th>
                      <th
                        scope="col"
                        className="w-52 text-gray-500 py-4 text-center outline outline-red-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500 py-4 pl-4 text-center outline outline-red-500 w-60"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className=" flex items-center  text-gray-500 py-4 pl-10  outline outline-blue-500"
                      >
                        Status
                        {/* <span>{ArrowDownIcon.symbol}</span> */}
                        <BsArrowDownShort className="inline-block" />
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500 py-4 text-center outline outline-red-500 w-42"
                      >
                        Institution
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500  py-4 pl-14 text-left outline outline-red-500"
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

export default UserList;
