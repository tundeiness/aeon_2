/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Title from './Title';
import CardLayout from './CardLayout';

function CeidComponent() {
  return (
    <article className="w-4/5 ml-auto">
      <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
        <div className="institution-wrapper p-8 h-full bg-white rounded-tl-3xl rounded-bl-3xl">
          <Title />
          <CardLayout>
            <h1 className="font-bold text-black"> Terms of use</h1>
            <p className="text-sm mt-2">
              {' '}
              I have consent from the owner of the details I
              provide below to fetch and display their
              data for identity verification.
              {' '}

            </p>
            <form onSubmit={() => alert('Submitted')}>
              <div className="mt-2">
                <input
                  type="checkbox"
                  id="scales"
                  name="terms"
                />
                <label htmlFor="terms" className="text-sm mt-2"> I agree to the terms outlined above.</label>
              </div>
              <div className="rounded-lg w-11/12 h-75 mt-4 bg-[#F9F9F9] flex flex-col overflow-y-scroll p-8 shadow-md border-2">
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber" className="font-medium"> Phone Number:</label>
                  <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bvn" className="font-medium"> BVN:</label>
                  <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="nin" className="font-medium"> NIN:</label>
                  <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="nin" className="font-medium"> Driver's License:</label>
                  <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" />
                </div>
                <button type="submit" className="border-2 w-1/4 rounded-lg mt-2 bg-blue-900 text-white p-4">
                  Search
                </button>
              </div>

            </form>
          </CardLayout>
        </div>
      </section>
    </article>
  );
}

export default CeidComponent;
