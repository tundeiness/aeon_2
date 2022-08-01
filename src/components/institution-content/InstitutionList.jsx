/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FiEdit2 } from 'react-icons/fi';
import { BsArrowDownShort, BsDashSquare, BsCheck2Square } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiOutlineEye } from 'react-icons/hi';
import SupportButton from '../support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import FilterBar from './filter-institution/FilterBar';
import SearchBar from './search-institution/SearchBar';
// import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import DeactivateModal from '../Modal/DeactivateModal/DeactivateModal';
// import ActivateModal from '../Modal/ActivateModal/ActivateModal';
import {
  getInstitution,
  selectAllInstitutions,
  getInstitutionStatus,
  getInstitutionError,
  enableDisableInstitution,
  searchInstitution,
} from '../../redux/features/institutionSlice';
import PageLoader from '../pageLoader/pageLoader';
import NoData from '../Nodata/NoData';
// import { useStateContext } from '../../contexts/ContextProvider'
// import InstitutionExcerpt from './InstitutionExcerpt';

const InstitutionList = () => {
  const { setGetItemId, setGetInstitutionId } = useStateContext();
  const institution = useSelector(selectAllInstitutions);
  const institutionStatus = useSelector(getInstitutionStatus);
  const institutionError = useSelector(getInstitutionError);

  const [isOpen, setIsOpen] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [getInstitutionCode, setGetInstitutionCode] = useState('');
  const dispatch = useDispatch();

  console.log(institution);

  useEffect(() => {
    if (institutionStatus === 'idle') {
      dispatch(getInstitution());
    }
  }, [dispatch, institutionStatus]);

  const handleViewInstitution = (id) => {
    // setSingleInstitution(id);
    setGetItemId(id);
  };

  const handleEditInstitution = (id) => {
    // some code blocks
    setGetInstitutionId(id);
  };

  const handleEnableDisableInstitution = (institutionCode) => {
    enableDisableInstitution(institutionCode);
  };

  const handleSearch = (searchParams) => {
    dispatch(searchInstitution(searchParams));
  };

  console.log(getInstitutionCode);

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
                to="view-institution"
                onClick={() => handleViewInstitution(datum.id)}
              >
                <HiOutlineEye className="view-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
              </Link>
              {datum.status === 'Active' ? (
                <span
                  className="flex items-center cursor-pointer"
                >
                  <BsDashSquare
                    className="text-iconRed w-4 h-4 font-bold"
                    onClick={() => {
                      setIsOpen(true);
                      handleEnableDisableInstitution(datum.code);
                    }}
                  />
                </span>
              ) : (
                <span className="flex items-center cursor-pointer">
                  <BsCheck2Square
                    className="text-iconGreen w-5 h-5 font-bold"
                    onClick={() => setIsOpen(true)}
                  />
                </span>
              )}
              <Link
                to="edit-institution"
                onClick={() => handleEditInstitution(datum.id)}
              >
                <FiEdit2 className="pen-icon hover:cursor-pointer w-5 h-5 text-penColor" />
              </Link>
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
        content = <PageLoader />;
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
              <FilterBar />
              <SearchBar />
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="name-list min-h-screen -mb-36">
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
                        <BsArrowDownShort className="text-lg font-semibold" />
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
                    {institution?.length > 0 ? renderSelection() : <NoData />}
                  </tbody>
                </table>
              </div>
              {institution?.length > 0 ? (
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
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
      </article>
      <DeactivateModal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        code={getInstitutionCode}
      />
      {/* <ActivateModal /> */}
    </>
  );
};

export default InstitutionList;
