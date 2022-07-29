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
import { useStateContext } from '../../../contexts/ContextProvider';
import {
  selectAllUsers,
  getUserStatus,
  getUserError,
  getAllUsers,
  createUser,
  selectUserByUserId,
} from '../../../redux/features/userSlice';
// import './createInstituiton.css';

const CreateUser = () => {
  const [updateInstitution, setUpdateInstitution] = useState(false);
  const [createRequestStatus, setCreateRequestStatus] = useState('idle');
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const { getUserByUserId } = useStateContext();

  const singleUser = useSelector((state) => selectUserByUserId(state, getUserByUserId));

  console.log(singleUser);

  // getUserByUserId,
  //       setGetUserByUserId,

  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);

  // const handleCreateInstitution = (value) => {
  //   dispatch(createInstitution({ value }));
  // };

  const validate = (value) => {
    const errors = {};
    if (!value.notificationEmail) {
      errors.email = 'Cannot be blank';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
    ) {
      errors.email = 'Invalid email format';
    }

    if (!value.first_name) {
      errors.name = 'First Name cannot be blank';
    }

    if (!value.last_name) {
      errors.name = 'Last Name cannot be blank';
    }

    if (!value.phone) {
      errors.phone = 'phone cannot be blank';
    }

    return errors;
  };

  const formic = useFormik({
    initialValues: {
      first_name: singleUser.othernames,
      last_name: singleUser.lastname,
      phone: '',
      institution: singleUser.institutionCode,
      email: singleUser.email,
      role: singleUser.roleCode,
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

  const { getFieldProps, setSubmitting } = formic;

  const handleSubmit = () => {
    console.log('formic.values', formic.values);
    dispatch(
      createUser({
        id: nanoid(),
        ...formic.values,
      }),
    ).unwrap();
    setSubmitting(false);

    // .then(() => {
    //   // navigate('/institutions');
    // });
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
          <div className="edit-user-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between">
              <h1 className="edit-user-header font-medium text-3xl">
                Edit User
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="my-7" />
            <form className="w-full" onSubmit={formic.handleSubmit}>
              <div className="full-name-block flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                    <input
                      className={`block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.first_name && formic.errors.first_name
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.first_name}
                      id="first-name"
                      type="text"
                      placeholder="First Name"
                      {...getFieldProps('first_name')}
                    />
                    {formic.touched.first_name && formic.errors.first_name && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.first_name}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="last-name"
                  >
                    Last Name
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.last_name && formic.errors.last_name
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.last_name}
                      id="last-name"
                      placeholder="Last Name"
                      type="text"
                      {...getFieldProps('last_name')}
                    />
                    {formic.touched.last_name && formic.errors.last_name && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.last_name}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="email-phone-block flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.email && formic.errors.email
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.email}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter User's Email"
                      {...getFieldProps('email')}
                    />
                    {formic.touched.email && formic.errors.email && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.email}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.phone && formic.errors.phone
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.phone}
                      placeholder="Enter Phone"
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

              <div className="institution-role-block flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="institution"
                  >
                    Institution
                    {' '}
                  </label>
                  <select
                    id="institution"
                    name="institution"
                    className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                    value={formic.values.institution}
                    onChange={formic.handleChange}
                    {...getFieldProps('institution')}
                  >
                    <option value="" label="Select Institution">
                      Select Institution
                    </option>
                    <option value="PrePaid" label=" PrePaid">
                      PrePaid
                    </option>
                    <option value="PostPaid" label="PostPaid">
                      PostPaid
                    </option>
                  </select>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="role"
                  >
                    Role
                    {' '}
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full py-3 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formic.values.role}
                    onChange={formic.handleChange}
                    {...getFieldProps('role')}
                  >
                    <option value="" label="Select">
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
              </div>

              <div className="bottom-matter-block flex flex-wrap -mx-3 mb-20 px-6">
                <div className="flex -mx-3 mt-8 mb-20">
                  <div className="w-full px-6 mb-16">
                    <button
                      className="shadow bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-sm py-2 px-6 rounded-md"
                      type="submit"
                      disabled={formic.isSubmitting}
                      // onClick={handleSaveInstitution()}
                      onClick={handleSubmit}
                    >
                      {formic.isSubmitting ? 'Please wait...' : 'Update User'}
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

export default CreateUser;
