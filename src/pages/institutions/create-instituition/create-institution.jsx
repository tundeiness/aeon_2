/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import SidebarNav from '../../../components/sideBarNav/sidebar-nav';
import SupportButton from '../../../components/support/support';

const CreateInstitution = () => {
  const test = 0;
  return (
    <>
      <SidebarNav />
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
            <div className="name-list">
              <p>Hello world</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default CreateInstitution;
