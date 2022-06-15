/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Navigate } from 'react-router-dom';
import SidebarNav from '../../../components/sideBarNav/sidebar-nav';
import SupportButton from '../../../components/support/support';

export const ViewInstitution = () => {
  const [updateInstitution, setUpdateInstitution] = useState(false);

  return (
    <>
      {/* <SidebarNav /> */}
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between">
              <h1 className="create-institution-header font-medium text-3xl">
                View Institution
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="my-3" />
            <div className="w-full px-1 mb-3">
              <button
                className="flex flex-row items-center justify-start bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white py-2 pl-2 pr-3 rounded-md font-medium text-base"
                type="submit"
              >
                <BiChevronLeft />
                {' '}
                Back to list
              </button>
            </div>
            <div className="w-full border-t border-gray-200">
              <dl>
                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    CREDEQUITY
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RC Number: 147749
                  </dd>
                </div>
                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    CREDEQUITY
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RC Number: 147749
                  </dd>
                </div>
                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    99999
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <button
                      className="bg-green-400 px-3 py-1 rounded-md text-white"
                      type="button"
                    >
                      Active
                    </button>
                  </dd>
                </div>

                <div className="bg-white flex flex-col justify-between px-4">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd>Address</dd>
                  <div className="flex flex-row justify-between py-5">
                    <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      CREDEQUITY
                    </dd>
                    <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      RC Number: 147749
                    </dd>
                  </div>
                </div>

                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 inline-block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    www.credequity.com
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    PostPaid
                  </dd>
                </div>

                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Number of Calls
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Notification Email
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt> */}
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    margotfoster@example.com
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Salary expectation
                  </dt> */}
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    $120,000
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          {/* <!-- Heroicon name: solid/paper-clip --> */}
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 flex-1 w-0 truncate">
                            {' '}
                            resume_back_end_developer.pdf
                            {' '}
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="./"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {' '}
                            Download
                            {' '}
                          </a>
                        </div>
                      </li>
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          {/* <!-- Heroicon name: solid/paper-clip --> */}
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 flex-1 w-0 truncate">
                            {' '}
                            coverletter_back_end_developer.pdf
                            {' '}
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="./"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {' '}
                            Download
                            {' '}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ViewInstitution;
