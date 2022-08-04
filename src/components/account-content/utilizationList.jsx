/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Link, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { HiOutlineEye } from 'react-icons/hi';

import SupportButton from '../support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import { handleDateOmitTime } from '../../utils/omitTime';

import {
  selectAllUsers,
  getAllUsers,
} from '../../redux/features/userSlice';
import {
  dailyInstitutionUtilization,
  dailyUtilizationStatus,
  dailyUtilizationError,
} from '../../redux/features/accountSlice';

import PageLoader from '../pageLoader/pageLoader';

import AccountSearchBar from './account-search/AccountSearchBar';
import NoData from '../Nodata/NoData';

import './utilizationlist.css';
// import InstitutionExcerpt from './InstitutionExcerpt';

const UtilizationList = () => {
  const { activeModal, setActiveModal } = useStateContext();
  const institution = useSelector(selectAllUsers);
  const utilizationStatus = useSelector(dailyUtilizationStatus);
  const utilizationError = useSelector(dailyUtilizationError);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [getWalletBalance, setGetWalletBalance] = useState('');
  // const [mockData, setMockData] = useState(institution[0]);

  const utilizationPayload = useSelector(dailyInstitutionUtilization);
  const { data } = utilizationPayload;
  // console.log(data);
  const { dailtyReports } = data;

  console.log(dailtyReports);

  const [pageNum, setPageNum] = useState(0);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   if (utilizationStatus === 'idle') {
  //     dispatch(getAllUsers());
  //   }
  // }, [dispatch, utilizationStatus]);

  // <InstitutionExcerpt  onClick={() => setIsOpen(true)}/>
  // const id = uuidv4();

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = dailtyReports
    .slice(dataPageVisited, dataPageVisited + dataPerPage)
    .map((datum, idx) => (
      // <InstitutionExcerpt onClick={() => setIsOpen(true)} key={datum.id} institution={institution} />
      <tr key={uuidv4()}>
        <td className="text-sm leading-5 py-4 px-4 text-left">
          {handleDateOmitTime(datum.date)}
        </td>
        <td className="py-4 uppercase text-center">
          {datum.totalNoOfApiCalls}
        </td>
        <td className="py-4 pr-4 pl-5 text-center text-green-600">
          {datum.totalDebit}
        </td>

        <td className="py-4 pr-4 pl-5 text-center text-green-600">
          {/* {datum.totalDebit} */}
          {/* {setGetWalletBalance(datum.currentBalance)} */}
        </td>
        <td className="py-4 pl-12">
          {/* <span className="inline-block text-gray-900 py-0.5 px-0.4 w-16 rounded-lg text-center hover:cursor-pointer">
            {datum.institutionCode}
          </span> */}
        </td>
        <td className="inline-block py-4 px-20">
          <span className="flex justify-between">
            <button type="button">
              <HiOutlineEye className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
            </button>
          </span>
        </td>
      </tr>
    ));

  const pagingCount = Math.ceil(dailtyReports?.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  const renderUtilization = () => {
    let content;
    switch (utilizationStatus) {
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
          <div className="utilization-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between mb-2">
              <h1 className="utilization-header mb-3 font-medium text-3xl">
                Daily Utilization
                {' '}
              </h1>
              <SupportButton />
            </header>
            <hr className="mb-12" />
            <AccountSearchBar />

            <div className="bg-white p-6 rounded-lg shadow-xs mb-10 border border-gray-200">
              <h2 className="text-base font-medium mb-4 text-gray-800">
                TOTAL WALLET BALANCE
              </h2>
              <p className="text-buttonTwo font-semibold text-4xl">
                {data.grandBalance}
                {' '}
                NGN
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <div className="utilization-list min-h-screen -mb-44">
                <table className="table-fixed w-full text-xs leading-normal">
                  <thead className=" bg-gray-50 text-xs capitalize">
                    <tr>
                      <th className="text-gray-500 py-4 px-5 text-left tracking-wider">
                        Date
                      </th>
                      <th className="text-gray-500 py-4 px-5 text-center tracking-wider">
                        Successful Calls
                      </th>
                      <th className=" text-gray-500 py-4 px-5 text-center tracking-wider">
                        Costs (#)
                      </th>
                      <th className="text-gray-500 py-4 px-10 tracking-wider ">
                        Payments (#)
                        {/* <span>{ArrowDownIcon.symbol}</span> */}
                        {/* <BsArrowDownShort className="inline-block" /> */}
                      </th>
                      <th className=" text-gray-500 py-4 px-6 text-center tracking-wider">
                        Net(#)
                      </th>
                      <th className=" text-gray-500  py-4 px-6 text-center tracking-wider">
                        Action
                      </th>
                      {/* <th
                        scope="col"
                        className=" text-gray-500 py-4 text-left"
                      /> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {dailtyReports?.length > 0 ? (
                      renderUtilization()
                    ) : (
                      <NoData />
                    )}
                  </tbody>
                </table>
              </div>
              {dailtyReports?.length > 0 ? (
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
    </>
  );
};

export default UtilizationList;
