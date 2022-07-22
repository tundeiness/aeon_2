/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HeadingDisplayRow, DataDisplayRow, TextDisplayRow } from '../../../components/viewDescription/ViewDescription';
import SupportButton from '../../../components/support/support';
import {
  BackToList,
  ActiveBtn,
  InActiveBtn,
} from '../../../components/Buttons/buttonCollections';
import {

  selectAllInstitutions,

} from '../../../redux/features/institutionSlice';

const ViewInstitution = () => {
  const dispatch = useDispatch();
  const [updateInstitution, setUpdateInstitution] = useState(false);

  const singleItem = localStorage.getItem('singleInstitution');
  const parseData = JSON.parse(singleItem);
  // const [saveInstitution, setSaveInstitution] = useState(null);
  // const oneInstitution = useSelector(selectInstitutionByCode);
  const params = useParams();
  console.log(params.id);
  // const institution = useSelector(selectAllInstitutions);

  // const oneData = useSelector((state) => selectInstitutionByCode(state, code));
  // console.log(institution);

  // const soloInstitution = institution.filter((obj) => obj.id === params.id);

  // const insti = useSelector((state) => state.institution.find((institution) => institution.id === institutionId));

  console.log(parseData);

  // useEffect(() => {
  //   dispatch(getOneInstitution());
  // }, [dispatch]);

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
            <BackToList
              text="Back to List"
              onClick={() => localStorage.removeItem('singleInstitution')}
            />
            <div className="w-full border-t border-gray-200 mt-3">
              <dl className="mx-2">
                <div className="flex flex-col divide-y divide-slate-200">
                  <HeadingDisplayRow
                    classText="company-number"
                    title={parseData.name}
                    content={`RC Number: ${parseData.rcNumber}`}
                  />
                  <DataDisplayRow
                    classText="code"
                    title="Code"
                    content={parseData.code}
                  />
                  <DataDisplayRow
                    classText="status"
                    title="Status"
                    content={
                      parseData.status === 'Active' ? (
                        <ActiveBtn />
                      ) : (
                        <InActiveBtn />
                      )
                    }
                  />
                  <DataDisplayRow
                    classText="address"
                    title="Address"
                    content={parseData.address}
                  />
                  <DataDisplayRow
                    classText="website"
                    title="Website URL"
                    content={parseData.websiteUrl}
                  />
                  <DataDisplayRow
                    classText="industry"
                    title="Industry Category"
                    content={parseData.category}
                  />

                  <DataDisplayRow
                    classText="calls"
                    title="Number of Calls"
                    content={parseData.noOfCalls}
                  />

                  <DataDisplayRow
                    classText="notification"
                    title="Notification Email"
                    content={parseData.notificationEmail}
                  />

                  <DataDisplayRow
                    classText="balance"
                    title="Balance"
                    content={`${parseData.balance} NGN`}
                  />

                  <DataDisplayRow
                    classText="threshold"
                    title="Threshold"
                    content={`${parseData.threshold} NGN`}
                  />

                  <DataDisplayRow
                    classText="test-token"
                    title="Test Token"
                    content={parseData.testToken}
                  />

                  <DataDisplayRow
                    classText="live-token"
                    title="Live Token"
                    content={parseData.token}
                  />

                  <TextDisplayRow
                    classText="documentation"
                    title="Documentation"
                    content={parseData.documentation}
                  />

                  <TextDisplayRow
                    classText="description"
                    title="Description"
                    content={parseData.description}
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
