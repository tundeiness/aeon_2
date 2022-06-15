/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useFormik } from 'formik';
import SidebarNav from '../../../components/sideBarNav/sidebar-nav';
import SupportButton from '../../../components/support/support';

const CreateInstitution = () => {
  const validate = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = 'Cannot be blank';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
    ) {
      errors.email = 'Invalid email format';
    }

    if (!value.name) {
      errors.name = 'Name cannot be blank';
    }

    if (!value.rc_number) {
      errors.rc_number = 'number cannot be blank';
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
      rc_number: '',
      address: '',
      phone: '',
      website: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(`You have loggedin succesfully! Email: ${values.email}`);
    },
  });
  return (
    <>
      <SidebarNav />
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between">
              <h1 className="create-institution-header font-medium text-3xl outline outline-red-200">
                Create Institution
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="my-7" />
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-first-name"
                  >
                    Name
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.name && formic.errors.name
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.name}
                      id="grid-first-name"
                      type="text"
                      placeholder="Institution's name"
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
                    htmlFor="grid-last-name"
                  >
                    RC Number
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.rc_number && formic.errors.rc_number
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.rc_number}
                      id="grid-last-name"
                      type="text"
                    />
                    {formic.touched.rc_number && formic.errors.rc_number && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.rc_number}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="address-phone-block flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-address"
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
                      id="grid-address"
                      type="text"
                      placeholder="Institution's Address"
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
                    />
                    {formic.touched.phone && formic.errors.phone && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.phone}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="institution-website"
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
                      name="company-website"
                      id="company-website"
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.website}
                      className={`flex-1 block w-full text-gray-700 rounded-none rounded-r-md sm:text-sm border  py-3 px-4 leading-tight focus:outline-none  focus:bg-white ${
                        formic.website && formic.errors.website
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      placeholder="www.companyname.com"
                    />
                    {formic.touched.website && formic.errors.website && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.website}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email-address"
                  >
                    notification email
                    {' '}
                  </label>
                  <input
                    className={`appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      formic.rc_number && formic.errors.rc_number
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } `}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.rc_number}
                    type="text"
                    placeholder="info@companyname.com"
                    name="email-address"
                    id="email-address"
                  />
                  {formic.touched.rc_number && formic.errors.rc_number && (
                    <span className="text-red-300 text-xs">
                      {formic.errors.rc_number}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6 px-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="payment-category"
                  >
                    payment category
                    {' '}
                  </label>
                  <select
                    id="payment-category"
                    name="payment-category"
                    autoComplete="category-name"
                    className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                    aria-label=".form-select-sm example"
                  >
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <option selected>Select Category</option>
                    <option>Bi-Anunal</option>
                    <option>Quarterly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div className="w-full md:w-1/3 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="payment-category"
                  >
                    number of calls
                    {' '}
                  </label>
                  <select
                    id="payment-category"
                    name="payment-category"
                    autoComplete="category-name"
                    className="mt-1 block w-full py-3 px-3 border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Bi-Anunal</option>
                    <option>Quarterly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div className="w-full md:w-1/3 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email-address"
                  >
                    threshold (NGN)
                    {' '}
                  </label>
                  <input
                    className={`appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      formic.rc_number && formic.errors.rc_number
                        ? 'border-red-400'
                        : 'border-gray-200'
                    } `}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.rc_number}
                    type="text"
                    placeholder="0"
                    name="email-address"
                    id="email-address"
                  />
                  {formic.touched.rc_number && formic.errors.rc_number && (
                    <span className="text-red-300 text-xs">
                      {formic.errors.rc_number}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6 px-6">
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
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  {/* <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="********@*****.**"
                    /> */}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                {/* <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="10"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div> */}
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
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
