/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import SupportButton from '../../../components/support/support';
import { createInstitution } from '../../../redux/features/institutionSlice';
import { createProduct } from '../../../redux/features/productSlice';
import './createproduct.css';

const CreateProduct = () => {
  const [updateInstitution, setUpdateInstitution] = useState(false);

  const dispatch = useDispatch();

  const dateCreated = new Date();

  const handleCreateInstitution = (value) => {
    dispatch(
      createInstitution({
        // id: uuidv4(),
        code: value.code,
        name: value.name,
        status: value.status,
        created: dateCreated,
        inputParameters: '',
        url: '',
        testUrl: '',
        documentation: '',
        summary: '',
        response: '',
      }),
    );
  };
  const validate = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = 'Cannot be blank';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
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
      code: '',
      name: '',
      inputParameters: '',
      url: '',
      testUrl: '',
      documentation: '',
      summary: '',
      response: '',
    },
    validate,
    onSubmit: (values) => {
      alert(`You have loggedin succesfully! Email: ${values.email}`);
    },
  });

  console.log(formic);
  return (
    <>
      {/* <SidebarNav /> */}
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="create-product-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between">
              <h1 className="create-product-header font-medium text-3xl">
                Create Products
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="my-7" />
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-3 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-name"
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
                      id="grid-name"
                      type="text"
                      placeholder=""
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
                    htmlFor="grid-code"
                  >
                    Code
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.code && formic.errors.code
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.code}
                      id="grid-code"
                      type="text"
                    />
                    {formic.touched.code && formic.errors.code && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.code}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="parameter-url-block flex flex-wrap -mx-3 mb-3 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-params"
                  >
                    input parameters
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.parameter && formic.errors.parameter
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.parameter}
                      id="grid-params"
                      type="text"
                      placeholder=""
                    />
                    {formic.touched.parameter && formic.errors.parameter && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.parameter}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-url"
                  >
                    URL
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.url && formic.errors.url
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.url}
                      id="grid-url"
                      type="url"
                    />
                    {formic.touched.url && formic.errors.url && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.url}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="url-docs-block flex flex-wrap -mx-3 mb-3 px-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-testUrl"
                  >
                    test URL
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.testUrl && formic.errors.testUrl
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.testUrl}
                      id="grid-testUrl"
                      type="text"
                      placeholder=""
                    />
                    {formic.touched.testUrl && formic.errors.testUrl && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.testUrl}
                      </span>
                    )}
                  </label>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-documentation"
                  >
                    API Documentation
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        formic.documentation && formic.errors.documentation
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } `}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.documentation}
                      id="grid-documentation"
                      type="text"
                    />
                    {formic.touched.documentation && formic.errors.documentation && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.documentation}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="summary-block flex flex-wrap -mx-3 mb-3 px-6">
                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="grid-summary"
                  >
                    summary
                    <input
                      className={`appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white ${
                        formic.summary && formic.errors.summary
                          ? 'border-red-400'
                          : 'border-gray-200'
                      }`}
                      onChange={formic.handleChange}
                      onBlur={formic.handleBlur}
                      value={formic.values.summary}
                      id="grid-summary"
                      type="text"
                      placeholder=""
                    />
                    {formic.touched.summary && formic.errors.summary && (
                      <span className="text-red-300 text-xs">
                        {formic.errors.summary}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="response-block flex flex-wrap -mx-3 mb-9 px-6">
                <div className="w-full md:w-full px-3">
                  <label
                    className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                    htmlFor="response"
                  >
                    response
                    {' '}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="response"
                      name="response"
                      rows="3"
                      className="appearance-none block w-full text-gray-700 shadow-sm mt-1 sm:text-sm border border-gray-200 rounded-md px-4 py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Enter response..."
                    />
                  </div>
                </div>

                <div className="flex -mx-3 mt-8">
                  <div className="w-full px-6">
                    <button
                      className="shadow bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-sm py-2 px-6 rounded-md"
                      type="submit"
                    >
                      Create Product
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

export default CreateProduct;
