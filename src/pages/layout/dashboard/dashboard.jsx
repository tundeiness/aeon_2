/* eslint-disable import/named */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable max-len */
// /* eslint-disable no-unused-vars */
// import React from 'react';

// const Dashboard = () => {
//   const text = 0;
//   return (
//     <div className="min-h-full">

//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           {/* <!-- Replace with your content --> */}
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
//           </div>
//           {/* <!-- /End replace --> */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
// import { lazy } from 'react';
import React, { lazy, useState } from 'react';
import {
  Routes, Link, Outlet, Route, useLocation,
} from 'react-router-dom';
import { BiHomeAlt, BiFile, BiXCircle } from 'react-icons/bi';
import {
  FiBarChart2, FiFlag, FiUser, FiRefreshCcw,
} from 'react-icons/fi';
import { ImStack } from 'react-icons/im';
import {
  BsCheck2Square,
  BsCheckCircle,
  BsXCircle,
  BsPatchCheck,
} from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { AiOutlineIdcard } from 'react-icons/ai';
import { CgChevronDown } from 'react-icons/cg';
import { FaRegThumbsUp, FaRegCheckCircle } from 'react-icons/fa';
import VendorStatus from '../../../components/vendorStatus/VendorStatus';
import BarChart from '../../../components/charts/Charts';
import GuageChart from '../../../components/charts/Donut';
// import Logo from '../../static/assets/img/logo-white.png';
import './dashboard.css';

const Dashboard = () => {
  const test = 0;

  return (
    // <article className="flex-1 border border-red-500">
    <article className="w-4/5 ml-auto">
      <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
        <div className="dashboard-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
          <header className="flex justify-between">
            {/* This is the root dashboard view */}
            <h1 className="inline-block font-medium text-xl leading-9">
              Dashboard
            </h1>
            <div className="flex items-center py-2 rounded-lg bg-supportBg text-gray-900 hover:cursor-pointer">
              <FiUser className="xl:mx-2" />
              <p className="xl:mr-2">support@credequity.com</p>
            </div>
          </header>
          <div className="vendor-boards flex xl:space-x-6 w-full xl:mt-5 xl:mb-6">
            {/* <div className="bg-white rounded-xl shadow border p-6 w-1/3">
              <h5 className="text-3xl font-bold mb-4 mt-0">NIMC</h5>
              <p className="text-gray-700 text-sm">Content goes here</p>
            </div> */}
            <VendorStatus vendor="NIMC" percent="10%" stat={false} />
            {/* <div className="bg-white rounded-xl shadow border p-6 w-1/3">
              <h5 className="text-3xl font-bold mb-4 mt-0">FRSC</h5>
              <p className="text-gray-700 text-sm">Content goes here</p>
            </div> */}
            <VendorStatus vendor="FRSC" percent="10%" stat={false} />
            {/* <div className="bg-white rounded-xl shadow border p-6 w-1/3">
              <h5 className="text-3xl font-bold mb-4 mt-0">BVN</h5>
              <p className="text-gray-700 text-sm">Content goes here</p>
            </div> */}
            <VendorStatus vendor="BVN" percent="20%" stat />
          </div>

          <div className="calls-overview">
            <p className="font-semibold leading-10 text-gray-900 text-2xl">
              API Calls Overview
            </p>
            <p className="xl:pb-4">Last update: April 30th 2022</p>
            <div className="overview-card flex xl:space-x-6 w-full">
              <div className="bg-forgotBlue rounded-xl shadow border p-6 w-1/3">
                <h5 className="text-md mb-4 mt-0 uppercase text-white">
                  Total
                </h5>
                <div className="content-wrap flex justify-between items-center mt-8">
                  <p className="inline-block text-white text-4xl font-semibold">
                    3,010
                  </p>
                  <FaRegThumbsUp className="text-white text-4xl font-semibold" />
                </div>
              </div>

              <div className="bg-successfull rounded-xl shadow border p-6 w-1/3">
                <h5 className="text-md mb-4 mt-0 uppercase text-gray-900">
                  successful
                </h5>
                <div className="content-wrap flex justify-between items-center mt-8">
                  <p className="inline-block text-gray-900 text-4xl font-semibold">
                    3,000
                  </p>
                  <FaRegCheckCircle className="text-gray-900 text-4xl font-semibold" />
                </div>
              </div>

              <div className="bg-failed rounded-xl shadow border p-6 w-1/3">
                <h5 className="text-md mb-4 mt-0 uppercase text-gray-900">
                  failed
                </h5>
                <div className="content-wrap flex justify-between items-center mt-8">
                  <p className="inline-block text-gray-900 text-4xl font-semibold">
                    10
                  </p>
                  <BiXCircle className="text-gray-900 text-4xl font-semibold" />
                </div>
              </div>

              <div className="bg-successRate rounded-xl shadow border p-6 w-1/3">
                <h5 className="text-md mb-4 mt-0 uppercase text-white">
                  success rate
                </h5>
                <div className="content-wrap flex justify-between items-center mt-8">
                  <p className="inline-block text-white text-4xl font-semibold">
                    100%
                  </p>
                  <BsPatchCheck className="text-white text-4xl font-semibold" />
                </div>
              </div>
            </div>
          </div>

          <div className="chart-group flex xl:space-x-6 w-full mt-8">
            <div className="bg-white rounded-xl shadow border p-6 w-2/3">
              <div className="flex justify-between">
                <p>API Calls by month</p>
                <span>Month</span>
              </div>
              <p>No. of successful and Failed API calls made</p>
              <div>
                {' '}
                <BarChart />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow border p-6 w-1/3">
              <p className="text-center">API Calls by institution</p>
              <div className="flex justify-between">
                <p className="uppercase inline-block">credequity</p>
                <p className="capitalize inline-block">today</p>
              </div>
              <GuageChart />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
