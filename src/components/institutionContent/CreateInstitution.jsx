/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import SupportButton from '../support/support';

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
            {/* <table className="table-fixed w-full text-xs">
              <thead className=" bg-gray-50 text-xs capitalize">
                <tr>
                  <th
                    scope="col"
                    className="w-12 text-gray-500 py-4 px-2 text-left"
                  >
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="w-52 text-gray-500 py-4 text-center"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" flex items-center  text-gray-500 py-4 pl-20"
                  >
                    Status
                    <BsArrowDownShort />
                  </th>
                  <th
                    scope="col"
                    className=" text-gray-500 py-4 pl-4 text-left"
                  >
                    Website
                  </th>
                  <th
                    scope="col"
                    className=" text-gray-500  py-4 pl-10 text-left"
                  >
                    Teams
                  </th>
                  <th scope="col" className=" text-gray-500 py-4 text-left" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">{displayData}</tbody>
            </table> */}
          </div>
          {/* <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pagingCount}
            onPageChange={changePage}
            containerClassName="pagination-button"
            previousLinkClassName="previousButton"
            nextLinkClassName="nextButton"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
            className="w-full flex flex-row justify-around py-3 text-xs shadow-md"
          /> */}
        </div>
      </section>
    </article>
  );
};

export default CreateInstitution;
