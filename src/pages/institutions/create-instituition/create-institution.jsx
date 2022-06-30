/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from '@reduxjs/toolkit';
import SidebarNav from '../../../components/sideBarNav/sidebar-nav';
import SupportButton from '../../../components/support/support';
import {
  createInstitution,
  selectAllInstitutions,
} from '../../../redux/features/institutionSlice';
import './createInstituiton.css';

const CreateInstitution = () => {
  const [updateInstitution, setUpdateInstitution] = useState(false);
  const [createRequestStatus, setCreateRequestStatus] = useState('idle');
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const institutions = useSelector(selectAllInstitutions);

  const handleCreateInstitution = (value) => {
    dispatch(createInstitution({ value }));
  };

  const validate = (value) => {
    const errors = {};
    if (!value.notificationEmail) {
      errors.notificationEmail = 'Cannot be blank';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
    ) {
      errors.notificationEmail = 'Invalid email format';
    }

    if (!value.name) {
      errors.name = 'Name cannot be blank';
    }

    if (!value.rcNumber) {
      errors.rcNumber = 'number cannot be blank';
    }

    if (!value.address) {
      errors.address = 'address cannot be blank';
    }

    if (!value.phone) {
      errors.phone = 'phone cannot be blank';
    }

    return errors;
  };

  const formic = useFormik({
    initialValues: {
      name: '',
      rcNumber: '',
      address: '',
      phone: '',
      websiteUrl: '',
      category: '',
      noOfCalls: '',
      threshold: '',
      documentation: '',
      description: '',
      notificationEmail: '',
      microservices: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(
      //   `You have loggedin succesfully! Email: ${values.notificationEmail}`,
      // );
      // console.log(values);
      resetForm(values);
    },
  });

  const { getFieldProps } = formic;

  const handleSubmit = () => {
    console.log('formic.values', formic.values);
    dispatch(
      createInstitution({
        ...formic.values,
        id: nanoid(),
        name: formic.values.name,
        rcNumber: formic.values.rcNumber,
        address: formic.values.address,
        phone: formic.values.phone,
        websiteUrl: formic.values.websiteUrl,
        category: formic.values.category,
        noOfCalls: formic.values.noOfCalls,
        threshold: formic.values.threshold,
        documentation: formic.values.documentation,
        description: formic.values.description,
        notificationEmail: formic.values.notificationEmail,
        microservices: formic.values.microservices,
      }),
    ).then(() => {
      // navigate('/institutions');
    });
  };

  const canCreate = formic.isValid && createRequestStatus === 'idle';

  // const handleSaveInstitution = () => {
  //   if (canCreate) {
  //     try {
  //       setCreateRequestStatus('pending');
  //       dispatch(
  //         createInstitution({
  //           // ...formic.values,
  //           id: Number(nanoid()),
  //           name: formic.values.name,
  //           rcNumber: formic.values.rcNumber,
  //           address: formic.values.address,
  //           phone: formic.values.phone,
  //           websiteUrl: formic.values.websiteUrl,
  //           category: formic.values.category,
  //           noOfCalls: formic.values.noOfCalls,
  //           threshold: formic.values.threshold,
  //           documentation: formic.values.documentation,
  //           description: formic.values.description,
  //           notificationEmail: formic.values.notificationEmail,
  //         }),
  //       );
  //     } catch (error) {
  //       return error.message || '';
  //     }
  //     setCreateRequestStatus('idle');
  //   }
  // };

  // const handleSubmit = async () => {
  //   try {
  //     await dispatch(
  //       createInstitution({
  //         ...formic.values,
  //         id: nanoid(),
  //         name: formic.values.name,
  //         rcNumber: formic.values.rcNumber,
  //         address: formic.values.address,
  //         phone: formic.values.phone,
  //         websiteUrl: formic.values.websiteUrl,
  //         category: formic.values.category,
  //         noOfCalls: formic.values.noOfCalls,
  //         threshold: formic.values.threshold,
  //         documentation: formic.values.documentation,
  //         description: formic.values.description,
  //         notificationEmail: formic.values.notificationEmail,
  //       }),
  //     );
  //     navigate('/institutions');
  //   } catch (error) {
  //     // handle any rejections/errors
  //     return error.message;
  //   }
  // };

  console.log(formic.values);

  return (
    <>
      {/* <SidebarNav /> */}
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between">
              <h1 className="create-institution-header font-medium text-3xl">
                Create Institution
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="my-7" />
            <form className="w-full" onSubmit={formic.handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-3 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="institution-name"
                  >
                    Name
                    <input
                      className={`block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.name && formic.errors.name
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.name}
                      id="institution-name"
                      type="text"
                      placeholder="Institution's name"
                      {...getFieldProps('name')}
                    />
                    {formic.touched.name && formic.errors.name && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.name}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="rcNumber"
                  >
                    RC Number
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.rcNumber && formic.errors.rcNumber
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.rcNumber}
                      id="rcNumber"
                      type="text"
                      {...getFieldProps('rcNumber')}
                    />
                    {formic.touched.rcNumber && formic.errors.rcNumber && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.rcNumber}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="address-phone-block flex flex-wrap -mx-3 mb-3 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="address"
                  >
                    address
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.address && formic.errors.address
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.address}
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Institution's Address"
                      {...getFieldProps('address')}
                    />
                    {formic.touched.address && formic.errors.address && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.address}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-phone"
                  >
                    contact phone number
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.phone && formic.errors.phone
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.phone}
                      id="grid-phone"
                      type="phone"
                      {...getFieldProps('phone')}
                    />
                    {formic.touched.phone && formic.errors.phone && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.phone}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="url-email-block flex flex-wrap -mx-3 mb-8 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="websiteUrl"
                  >
                    website URL
                    {' '}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      {' '}
                      https://
                      {' '}
                    </span>
                    <input
                      type="text"
                      name="websiteUrl"
                      id="websiteUrl"
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.websiteUrl}
                      className={`flex-1 block w-full text-gray-700 rounded-none rounded-r-md sm:text-sm border  py-3 px-4 leading-tight focus:outline-none  focus:bg-white ${
                        formic.websiteUrl && formic.errors.websiteUrl
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      placeholder="www.companyname.com"
                      {...getFieldProps('websiteUrl')}
                    />
                    {formic.touched.websiteUrl && formic.errors.websiteUrl && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.websiteUrl}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="notificationEmail"
                  >
                    notification email
                    {' '}
                  </label>
                  <input
                    type="email"
                    name="notificationEmail"
                    id="notificationEmail"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.notificationEmail}
                    className={`appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      formic.rc_number && formic.errors.rc_number
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } `}
                    placeholder="info@companyname.com"
                    {...getFieldProps('notificationEmail')}
                  />
                  {formic.touched.notificationEmail
                    && formic.errors.notificationEmail && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.notificationEmail}
                      </span>
                  )}
                </div>
              </div>

              <div className="category-block flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="category"
                  >
                    payment category
                    {' '}
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                    value={formic.values.category}
                    onChange={formic.handleChange}
                    {...getFieldProps('category')}
                  >
                    <option value="" label="Select Category">
                      Select Category
                    </option>
                    <option value="PrePaid" label=" PrePaid">
                      PrePaid
                    </option>
                    <option value="PostPaid" label="PostPaid">
                      PostPaid
                    </option>
                  </select>
                </div>

                <div className="w-full md:w-1/3 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="noOfCalls"
                  >
                    number of calls
                    {' '}
                  </label>
                  <select
                    id="noOfCalls"
                    name="noOfCalls"
                    className="mt-1 block w-full py-3 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formic.values.noOfCalls}
                    onChange={formic.handleChange}
                    {...getFieldProps('noOfCalls')}
                  >
                    <option value="" label="Select...">
                      Select...
                    </option>
                    <option value="1000" label="1000">
                      1000
                    </option>
                    <option value="2000" label="2000">
                      2000
                    </option>
                    <option value="5000" label="5000">
                      5000
                    </option>
                  </select>
                </div>

                <div className="w-full md:w-1/3 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="threshold"
                  >
                    threshold (NGN)
                    {' '}
                  </label>
                  <input
                    className={`appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      formic.threshold && formic.errors.threshold
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } `}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.threshold}
                    type="text"
                    placeholder="0.00"
                    name="threshold"
                    id="threshold"
                    {...getFieldProps('threshold')}
                  />
                  {formic.touched.threshold && formic.errors.threshold && (
                    <span className="text-red-300 text-xs">
                      {formic.errors.threshold}
                    </span>
                  )}
                </div>
              </div>

              <div className="services-block flex flex-wrap -mx-3 mb-8 px-6 pt-14">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="microservices"
                  >
                    Microservices
                    {' '}
                  </label>
                  <select
                    id="microservices"
                    name="microservices"
                    className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                    value={formic.values.microservices}
                    onChange={formic.handleChange}
                    {...getFieldProps('microservices')}
                  >
                    <option value="" label="Select Category">
                      Select Microservices
                    </option>
                    <option value="Service One" label=" PrePaid">
                      CredNIN
                    </option>
                    <option value="Service Two" label="PostPaid">
                      Service Two
                    </option>
                  </select>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <div className="toggle-text-block mt-9 flex items-center">
                    <div
                      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus outline-none focus:ring-2 focus:ring-offset-2 focus-ring-cyan-400 ${
                        enabled ? 'bg-toggleBg' : 'bg-gray-200'
                      }`}
                      onClick={() => setEnabled(!enabled)}
                      role="presentation"
                    >
                      <span
                        aria-hidden="true"
                        className={`${
                          enabled ? 'translate-x-5' : 'translate-x-0'
                        } pointer-event-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </div>
                    <label className="inline-block text-label ml-3 font-normal text-xs text-gray-400">
                      Set Banded Pricing ( Minimum & Maximum Price range )
                    </label>
                  </div>
                </div>
              </div>

              <div className="documentation-description-block flex flex-wrap -mx-3 mb-9 px-6">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="documentation"
                  >
                    documentation
                    {' '}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="documentation"
                      name="documentation"
                      rows="3"
                      className="appearance-none block w-full text-gray-700 shadow-sm mt-1 sm:text-sm border border-gray-200 rounded-md px-4 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Enter the documentation..."
                      value={formic.values.documentation}
                      onChange={formic.handleChange}
                      {...getFieldProps('documentation')}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="description"
                  >
                    description
                    {' '}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      className="appearance-none block w-full text-gray-700 shadow-sm mt-1 sm:text-sm border border-gray-200 rounded-md px-4 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Enter a Description..."
                      value={formic.values.description}
                      onChange={formic.handleChange}
                      {...getFieldProps('description')}
                    />
                  </div>
                </div>

                <div className="flex -mx-3 mt-8">
                  <div className="w-full px-6">
                    <button
                      className="shadow bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-sm py-2 px-6 rounded-md"
                      type="submit"
                      disabled={formic.isSubmitting}
                      // onClick={handleSaveInstitution()}
                    >
                      {formic.isSubmitting
                        ? 'Please wait...'
                        : 'Create Institution'}
                    </button>
                    <button
                      className="bg-white text-gray-500 focus:outline-none py-2 px-6 ml-5 rounded-md border border-gray-200"
                      type="submit"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </article>
    </>
  );
};

export default CreateInstitution;
