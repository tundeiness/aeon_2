import React from 'react';
import { useSelector } from 'react-redux';
import { HeadingDisplayRow, DataDisplayRow, TextDisplayRow } from '../../../components/viewDescription/ViewDescription';
import { useStateContext } from '../../../contexts/ContextProvider';
import SupportButton from '../../../components/support/support';
import {
  BackToList,
  ActiveBtn,
  InActiveBtn,
} from '../../../components/Buttons/buttonCollections';
import {
  selectInstitutionById,
} from '../../../redux/features/institutionSlice';

const ViewInstitution = () => {
  const { getItemId } = useStateContext();
  const singleInstitution = useSelector((state) => selectInstitutionById(state, getItemId));

  return (
    <>
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
            <BackToList
              text="Back to List"
              onClick={() => localStorage.removeItem('singleInstitution')}
            />
            <div className="w-full border-t border-gray-200 mt-3">
              <dl className="mx-2">
                <div className="flex flex-col divide-y divide-slate-200">
                  <HeadingDisplayRow
                    classText="company-number"
                    title={singleInstitution.name}
                    content={`RC Number: ${singleInstitution.rcNumber}`}
                  />
                  <DataDisplayRow
                    classText="code"
                    title="Code"
                    content={singleInstitution.code}
                  />
                  <DataDisplayRow
                    classText="status"
                    title="Status"
                    content={
                      singleInstitution.status === 'Active' ? (
                        <ActiveBtn />
                      ) : (
                        <InActiveBtn />
                      )
                    }
                  />
                  <DataDisplayRow
                    classText="address"
                    title="Address"
                    content={singleInstitution.address}
                  />
                  <DataDisplayRow
                    classText="website"
                    title="Website URL"
                    content={singleInstitution.websiteUrl}
                  />
                  <DataDisplayRow
                    classText="industry"
                    title="Industry Category"
                    content={singleInstitution.category}
                  />

                  <DataDisplayRow
                    classText="calls"
                    title="Number of Calls"
                    content={singleInstitution.noOfCalls}
                  />

                  <DataDisplayRow
                    classText="notification"
                    title="Notification Email"
                    content={singleInstitution.notificationEmail}
                  />

                  <DataDisplayRow
                    classText="balance"
                    title="Balance"
                    content={`${singleInstitution.balance} NGN`}
                  />

                  <DataDisplayRow
                    classText="threshold"
                    title="Threshold"
                    content={`${singleInstitution.threshold} NGN`}
                  />

                  <DataDisplayRow
                    classText="test-token"
                    title="Test Token"
                    content={singleInstitution.testToken}
                  />

                  <DataDisplayRow
                    classText="live-token"
                    title="Live Token"
                    content={singleInstitution.token}
                  />

                  <TextDisplayRow
                    classText="documentation"
                    title="Documentation"
                    content={singleInstitution.documentation}
                  />

                  <TextDisplayRow
                    classText="description"
                    title="Description"
                    content={singleInstitution.description}
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
