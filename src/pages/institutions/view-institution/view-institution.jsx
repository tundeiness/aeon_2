/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ViewDescription } from '../../../components/viewDescription/ViewDescription';
import SupportButton from '../../../components/support/support';
import {
  BackToList,
  ActiveBtn,
  InActiveBtn,
} from '../../../components/Buttons/buttonCollections';

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
            <BackToList text="Back to List" />
            <div className="w-full border-t border-gray-200">
              <dl>
                <div className="flex flex-row justify-between bg-gray-50 px-4 py-5">
                  <dd className="outline outline-red-500 block w-28 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    CREDEQUITY
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RC Number: 147749
                  </dd>
                </div>
                <ViewDescription
                  headingLeft="Code"
                  contentLeft="99999"
                  headingRight="Status"
                  contentRight={<ActiveBtn />}
                />

                <div className="bg-white flex flex-col justify-between px-4">
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
                  <dd className="outline outline-red-500 inline-block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    www.credequity.com
                  </dd>
                  <dd className="outline outline-red-500 block w-1/3 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    PostPaid
                  </dd>
                </div>

                <ViewDescription
                  headingLeft="Number of Calls"
                  contentLeft="1,000"
                  headingRight="Notification Email"
                  contentRight="support@credequity.com"
                />

                <ViewDescription
                  headingLeft="Website URL"
                  contentLeft=" www.credequity.com"
                  headingRight="Industry Category"
                  contentRight="Support"
                />

                <ViewDescription
                  headingLeft="Balance"
                  contentLeft="0 NGN"
                  headingRight="Notification Email"
                  contentRight="support@credequity.com"
                />

                <ViewDescription
                  headingLeft="Website URL"
                  contentLeft=" www.credequity.com"
                  headingRight="Industry Category"
                  contentRight="Support"
                />

                <ViewDescription
                  headingLeft="Test Token"
                  contentLeft="csx982Ief5saa34gd"
                  headingRight="Live Token"
                  contentRight="009csx982IefFGop5saa34324gd"
                />

                <div className="bg-white flex flex-row justify-between px-4 py-5">
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
