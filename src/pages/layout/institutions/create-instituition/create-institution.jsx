/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import SupportButton from '../../../../components/support/support';

const CreateInstitution = () => {
  const test = 0;
  return (
    <article className="w-4/5 ml-auto">
      <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
        <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
          <header className="flex justify-between mb-2">
            <h1 className="create-institution-header mb-3 font-medium text-3xl">
              Create Institution
              {' '}
            </h1>
            <SupportButton />
          </header>

          <hr className="mb-5" />
          {/* <div className="search-wrapper relative">
            <FiSearch className="absolute z-10 top-2.5 left-2 text-xl" />
            <input
              type="search"
              placeholder="Search"
              className="relative py-2 pl-8 w-1/4 rounded-lg outline outline-gray-300"
            />
          </div> */}
          <div className="name-list">
            <p>Hello world</p>

          </div>
        </div>
      </section>
    </article>
  );
};

export default CreateInstitution;
