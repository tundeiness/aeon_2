/* eslint-disable import/no-named-as-default */
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
import { HiOutlineEye } from 'react-icons/hi';
import SupportButton from '../support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import Data from '../../data/MOCK_DATA.json';
import Modal from '../Modal/Modal';
import DeleteInstitution from '../../pages/institutions/deleteInstitution/DeleteInstitution';
import ViewInstitution from '../../pages/institutions/view-institution/view-institution';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import ActivateModal from '../Modal/ActivateModal/ActivateModal';
import { GoButton, FilterButton } from '../Buttons/buttonCollections';
import {
  getInstitution,
  selectAllInstitutions,
  getInstitutionStatus,
  getInstitutionError,
  getOneInstitution,
} from '../../redux/features/institutionSlice';
// import InstitutionExcerpt from './InstitutionExcerpt';

const InstitutionList = () => {
  const { activeModal, setActiveModal } = useStateContext();
  const [viewInstitution, setViewInstitution] = useState(null);
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
      <>
        <tr key={datum.id}>
          <td className="text-sm leading-5 py-4 px-3">{datum.id}</td>
          <td className="py-4 uppercase text-center">{datum.name}</td>
          <td className="py-4 pr-4 pl-20">
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
          <td className="py-4 pl-4">{datum.websiteUrl}</td>
          <td className="py-4 pl-10">
            <span className="inline-block text-textTeams py-0.5 px-0.4 w-16 bg-indigo-50 rounded-lg text-center hover:cursor-pointer">
              {datum.category}
            </span>
          </td>
          <td className="py-4 px-6">
            <span className="flex justify-between">
              <Link
                to="/view-institution"
                onClick={getOneInstitution(datum.code)}
                // onClick={() => setViewInstitution((viewInstitution) => (viewInstitution === _idx ? null : _idx))}
              >
                <HiOutlineEye className="view-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
              </Link>
              {datum.status === 'Active' ? (
                <span className="flex items-center">
                  <BsDashSquare
                    className="text-iconRed w-4 h-4 font-bold"
                    onClick={() => setIsOpen(true)}
                  />
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
      </>
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
                Institutions
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="mb-5" />
            <div className="flex flex-row w-full">
              <div className="flex flex-row justify-between w-1/2 py-4">
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
              </div>
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
      <ActivateModal />
    </>
  );
};

export default InstitutionList;
