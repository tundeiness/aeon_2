/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { nanoid } from '@reduxjs/toolkit';
import { Link, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { HiOutlineEye } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import { useFormik, ErrorMessage } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import { CalendarElement } from '../../data/Dummy';
import NoData from '../Nodata/NoData';
import SupportButton from '../support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import ActivateDeactivateInstitutionModal from '../Modal/ActivateDeactivateInstitutionModal/ActivateDeactivateInstitutionModal';
import {
  SearchButtonUtilization,
  ExportButton,
} from '../Buttons/buttonCollections';
import {
  selectAllUsers,
  getUserStatus,
  getUserError,
  getAllUsers,
} from '../../redux/features/userSlice';
import './transactionsearchlist.css';
// import InstitutionExcerpt from './InstitutionExcerpt';

const TransactionSearchList = () => {
  const { activeModal, setActiveModal } = useStateContext();
  const [query, setQuery] = useState('');
  const [formValues, setFormValues] = useState('');
  const dispatch = useDispatch();
  // const { loading, institution } = useSelector((state) => ({
  //   ...state.institution,
  // }));

  // const institution = useSelector((state) => state.institution.institution);

  const formic = useFormik({
    initialValues: {
      institution: '',
      transaction: '',
      apiName: '',
      startDate: '',
      endDate: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // alert(
      //   `You have loggedin succesfully! Email: ${values.notificationEmail}`,
      // );
      // console.log(values);

      setFormValues({
        id: nanoid(),
        institution: values.institution,
        transaction: values.transaction,
        apiName: values.apiName,
        startDate: values.startDate,
        endDate: values.endDate,
      });

      dispatch(createUser(formValues));
      resetForm({
        values: {
          institution: '', transaction: '', apiName: '', startDate: '', endDate: '',
        },
      });
    },
  });

  const { getFieldProps, setSubmitting } = formic;

  const institution = useSelector(selectAllUsers);
  const institutionStatus = useSelector(getUserStatus);
  const institutionError = useSelector(getUserError);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [mockData, setMockData] = useState(institution[0]);
  const [pageNum, setPageNum] = useState(0);

  const [page, setPage] = useState(1);

  console.log(institution);

  useEffect(() => {
    if (institutionStatus === 'idle') {
      dispatch(getAllUsers());
    }
  }, [dispatch, institutionStatus]);

  const keys = ['name', 'date', 'email'];

  const handleSearch = (val) => {
    setQuery(val);
    return institution.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query)),
      // item.name.toLowerCase().includes(query)
      //   || item.date.toLowerCase().includes(query)
      //   || item.email.toLowerCase().includes(query),
    );
  };

  // <InstitutionExcerpt  onClick={() => setIsOpen(true)}/>
  // const id = uuidv4();

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = institution.length === 0 ? (<NoData />) : (

    institution
      .slice(dataPageVisited, dataPageVisited + dataPerPage)
      .map((datum, idx) => (
      // <InstitutionExcerpt onClick={() => setIsOpen(true)} key={datum.id} institution={institution} />
        <tr key={uuidv4()}>
          <td className="text-sm leading-5 py-4 px-4 text-left">{idx + 1}</td>
          <td className="py-4 uppercase text-center">{`${datum.lastname} ${datum.othernames}`}</td>
          <td className="py-4 pr-4 pl-5">{datum.email}</td>
          <td className="py-4 px-16 inline-block">
            {datum.status === 'Active' ? (
              <span className="flex items-center bg-green-300 py-0.3 px-0.2 w-14 rounded-xl text-white text-center">
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
          <td className="inline-block py-4 px-20">
            <span className="flex justify-between">
              <button type="button">
                <HiOutlineEye className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
              </button>

            </span>
          </td>
        </tr>
      ))
  );

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
          <div className="utilization-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between mb-2">
              <h1 className="utilization-header mb-3 font-medium text-3xl">
                Transactions
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="mb-12" />
            <form className="w-full" onSubmit={formic.handleSubmit}>
              <div className="flex flex-row justify-between w-full mb-6">
                <div className="w-1/3 pr-6">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="institution"
                  >
                    Institution
                    <input
                      className="block w-full text-gray-700 border rounded-lg py-3 px-3 mt-2 leading-tight focus:outline-none focus:bg-white "
                      id="institution"
                      type="text"
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.institution}
                      {...formic.getFieldProps('institution')}
                    />
                  </label>
                </div>
                <div className="w-1/3 pr-6">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="transaction"
                  >
                    Transaction Reference
                    <input
                      className="block w-full text-gray-700 border rounded-lg py-3 px-3 mt-2 leading-tight focus:outline-none focus:bg-white "
                      id="transaction"
                      type="text"
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.transaction}
                      {...formic.getFieldProps('transaction')}
                    />
                  </label>
                </div>
                <div className="w-1/3 pr-2">
                  {' '}
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="apiName"
                  >
                    API Name
                    {' '}
                  </label>
                  <select
                    id="apiName"
                    name="apiName"
                    className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                    value={formic.values.apiName}
                    onChange={formic.handleChange}
                    {...formic.getFieldProps('apiName')}
                  >
                    <option value="" label="" />
                    <option value="PrePaid" label=" PrePaid">
                      PrePaid
                    </option>
                    <option value="PostPaid" label="PostPaid">
                      PostPaid
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row justify-between w-full mb-6">
                <div className="w-1/3 pr-6 relative">
                  <CalendarElement />
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="start_date"
                  >
                    Start Date
                    <input
                      className="relative block w-full text-gray-700 border rounded-lg py-3 px-10 mt-2 leading-tight focus:outline-none focus:bg-white "
                      id="start_date"
                      type="text"
                      placeholder="Start Date"
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.startDate}
                      {...formic.getFieldProps('startDate')}
                    />
                  </label>
                </div>

                <div className="w-1/3 pr-6 relative">
                  <CalendarElement />
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="end_date"
                  >
                    End Date
                    {' '}
                    <input
                      className="relative block w-full text-gray-700 border rounded-lg py-3 px-10 mt-2 leading-tight focus:outline-none focus:bg-white"
                      id="end_date"
                      type="text"
                      placeholder="End Date"
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.endDate}
                      {...formic.getFieldProps('endDate')}
                    />
                  </label>
                </div>

                <div className="w-1/3">
                  <div className=" flex flex-row justify-around mt-7">
                    <SearchButtonUtilization />
                    <ExportButton />
                  </div>
                </div>
              </div>
            </form>

            <div className="border border-gray-200 rounded-lg">
              <div className="name-list">
                <table className="table-fixed w-full text-xs leading-normal">
                  <thead className=" bg-gray-50 text-xs capitalize">
                    <tr>
                      <th className="text-gray-500 py-4 px-5 text-left tracking-wider">
                        Reference
                      </th>
                      <th className="text-gray-500 py-4 px-5 text-center tracking-wider">
                        Status
                      </th>
                      <th className=" text-gray-500 py-4 px-5 text-center tracking-wider">
                        API
                      </th>
                      <th className="text-gray-500 py-4 px-10 tracking-wider ">
                        Response
                      </th>
                      <th className=" text-gray-500 py-4 px-6 text-center tracking-wider">
                        Date
                      </th>
                      <th className=" text-gray-500  py-4 px-6 text-center tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
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
      <ActivateDeactivateInstitutionModal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </>
  );
};

export default TransactionSearchList;
