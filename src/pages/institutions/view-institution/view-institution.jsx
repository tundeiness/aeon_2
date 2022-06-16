/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Navigate, Link } from 'react-router-dom';
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
            <div className="inline-block px-1 mb-3">
              <Link
                className="flex flex-row items-center justify-start bg-buttonTwo hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white py-2 pl-2 pr-3 rounded-md font-medium text-base"
                to="/institution"
              >
                <BiChevronLeft />
                {' '}
                Back to list
              </Link>
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

                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 inline-block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    1,000
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    support@credequity.com
                  </dd>
                </div>

                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Website URL
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Industry Category
                  </dd>
                </div>

                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 inline-block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    www.credequity.com
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Support
                  </dd>
                </div>

                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Balance
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Notification Email
                  </dd>
                </div>

                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 inline-block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    0 NGN
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    support@credequity.com
                  </dd>
                </div>

                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Test Token
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Live Token
                  </dd>
                </div>
                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt> */}
                  <dd className="outline outline-red-500 inline-block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    csx982Ief5saa34gd
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    009csx982IefFGop5saa34324gd
                  </dd>
                </div>

                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Documentation
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 ">
                  <dd className="mt-1 text-sm text-gray-900">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>

                <div className="bg-white flex flex-row justify-between px-4 py-5">
                  {/* <dt className="text-sm font-medium text-gray-500">
                    Application for
                  </dt> */}
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Description
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 ">
                  <dd className="mt-1 text-sm text-gray-900">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
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
