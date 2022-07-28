/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  WideHeadingDisplayRow,
  DataDisplayRow,
  TextDisplayRow,
} from '../../../components/viewDescription/ViewDescription';
import SupportButton from '../../../components/support/support';
import {
  BackToList,
  ActiveBtn,
  InActiveBtn,
} from '../../../components/Buttons/buttonCollections';
import { handleDate } from '../../../utils/dateParser';

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
                View Product
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="my-3" />
            <BackToList text="Back to List" to="/products" />
            <div className="w-full border-t border-gray-200 mt-3">
              <dl className="mx-2">
                <div className="flex flex-col divide-y divide-slate-200">
                  <WideHeadingDisplayRow />
                  <DataDisplayRow
                    classText="code"
                    title="Code"
                    content="100602"
                  />
                  <DataDisplayRow
                    classText="status"
                    title="Status"
                    content={<ActiveBtn />}
                  />
                  <DataDisplayRow
                    classText="date-modified"
                    title="Date Modified"
                    content="20/03/2021 21:53:20"
                  />
                  <DataDisplayRow
                    classText="date-created"
                    title="Date Created"
                    content="20/03/2021 21:48:20"
                  />
                  <DataDisplayRow
                    classText="parameters"
                    title="Input Parameters"
                    content="Driver's License"
                  />

                  <DataDisplayRow
                    classText="url"
                    title="URL"
                    content="https://www.credequity.com/CredOcr/api/V1/VerifyFrscWithFace"
                  />

                  <DataDisplayRow
                    classText="test-url"
                    title="Test URL"
                    content="support@credequity.com"
                  />

                  <DataDisplayRow
                    classText="documentation"
                    title="API Documentation"
                    content="None"
                  />

                  <DataDisplayRow
                    classText="summary"
                    title="Summary"
                    content="The FRSC with Face Match verification checks the authenticity of a supplied means of identification and authenticity of the supplier through face verification"
                  />

                  <TextDisplayRow
                    classText="response"
                    title="Response"
                    content="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint."
                  />
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
