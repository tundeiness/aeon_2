/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  WideHeadingDisplayRow,
  DataDisplayRow,
  TextDisplayRow,
} from '../../../components/viewDescription/ViewDescription';
import SupportButton from '../../../components/support/support';
import { useStateContext } from '../../../contexts/ContextProvider';
import {
  BackToList,
  ActiveBtn,
  InActiveBtn,
} from '../../../components/Buttons/buttonCollections';
import { handleDate } from '../../../utils/dateParser';
import { selectProductByCode } from '../../../redux/features/productSlice';

export const ViewInstitution = () => {
  const { getProductByCode } = useStateContext();
  const singleProduct = useSelector((state) => selectProductByCode(state, getProductByCode));

  console.log(singleProduct);

  return (
    <>
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
                  <WideHeadingDisplayRow data={singleProduct.name} />
                  <DataDisplayRow
                    classText="code"
                    title="Code"
                    content={singleProduct.code}
                  />
                  <DataDisplayRow
                    classText="status"
                    title="Status"
                    content={singleProduct.status === 'Active' ? <ActiveBtn /> : <InActiveBtn />}
                  />
                  <DataDisplayRow
                    classText="date-modified"
                    title="Date Modified"
                    content={handleDate(singleProduct.dateLastModified)}
                  />
                  <DataDisplayRow
                    classText="date-created"
                    title="Date Created"
                    content={handleDate(singleProduct.dateCreated)}
                  />
                  <DataDisplayRow
                    classText="parameters"
                    title="Input Parameters"
                    content={singleProduct.inputParameters}
                  />

                  <DataDisplayRow
                    classText="url"
                    title="URL"
                    content={singleProduct.url}
                  />

                  <DataDisplayRow
                    classText="test-url"
                    title="Test URL"
                    content={singleProduct.testUrl}
                  />

                  <DataDisplayRow
                    classText="documentation"
                    title="API Documentation"
                    content={singleProduct.apiDocumentation}
                  />

                  <DataDisplayRow
                    classText="summary"
                    title="Summary"
                    content={singleProduct.summary}
                  />

                  <TextDisplayRow
                    classText="response"
                    title="Response"
                    content={singleProduct.response}
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
