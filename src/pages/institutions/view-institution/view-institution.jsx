/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HeadingDisplayRow, DataDisplayRow, TextDisplayRow } from '../../../components/viewDescription/ViewDescription';
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
            <div className="w-full border-t border-gray-200 mt-3">
              <dl className="mx-2">
                <div className="flex flex-col divide-y divide-slate-200">
                  <HeadingDisplayRow
                    classText="company-number"
                    title="CREDEQUITY"
                    content="RC Number: 147749"
                  />
                  <DataDisplayRow
                    classText="code"
                    title="Code"
                    content="14749"
                  />
                  <DataDisplayRow
                    classText="status"
                    title="Status"
                    content={<ActiveBtn />}
                  />
                  <DataDisplayRow
                    classText="address"
                    title="Address"
                    content="13A Charles Ifeanyi Street Lekki Phase 1 Lekki, Eti-Osa,"
                  />
                  <DataDisplayRow
                    classText="website"
                    title="Website URL"
                    content="www.credequity.com"
                  />
                  <DataDisplayRow
                    classText="industry"
                    title="Industry Category"
                    content="PostPaid"
                  />

                  <DataDisplayRow
                    classText="calls"
                    title="Number of Calls"
                    content="1000"
                  />

                  <DataDisplayRow
                    classText="notification"
                    title="Notificataion Email"
                    content="support@credequity.com"
                  />

                  <DataDisplayRow
                    classText="balance"
                    title="Balance"
                    content="0 NGN"
                  />

                  <DataDisplayRow
                    classText="threshold"
                    title="Threshold"
                    content="0 NGN"
                  />

                  <DataDisplayRow
                    classText="test-token"
                    title="Test Token"
                    content="csx982Ief5saa34gd"
                  />

                  <DataDisplayRow
                    classText="live-token"
                    title="Live Token"
                    content="009csx982IefFGop5saa34324gd"
                  />

                  <TextDisplayRow
                    classText="documentation"
                    title="Documentation"
                    content="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint."
                  />

                  <TextDisplayRow
                    classText="description"
                    title="Description"
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
