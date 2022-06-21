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
import VendorStatus from '../../components/vendorStatus/VendorStatus';
import BarChart from '../../components/charts/Charts';
import GuageChart from '../../components/charts/Donut';
import SidebarNav from '../../components/sideBarNav/sidebar-nav';
// import Logo from '../../static/assets/img/logo-white.png';
import Support from '../../components/support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import { GetData } from '../../components/Buttons/buttonCollections';
import NIMC from '../../static/assets/img/nimc.webp';
import { useGetDashboardQuery } from '../../services/dashboardAPI';
import './dashboard.css';

const Dashboard = () => {
  const test = 0;
  // const { data, isFetching } = useGetDashboardQuery;

  // if (isFetching) return 'loading...';
  // console.log(data);
  const {
    activeModal, setActiveModal, isOnline, setIsOnline,
  } = useStateContext();
  const Badge = <img src={NIMC} alt="NIMC" className="h-14 w-16" />;

  return (
  // <article className="flex-1 border border-red-500">

    <article className="w-4/5 ml-auto">
      <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
        <div className="dashboard-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
          <header className="flex justify-between">
            <h1 className="inline-block font-medium text-3xl leading-9">
              Dashboard
            </h1>
            <Support />
          </header>
          <div className="vendor-boards flex xl:space-x-6 w-full xl:mt-5 xl:mb-6">
            <VendorStatus vendor={Badge} stat={false} bottomSpace={4} />
            <VendorStatus vendor="FRSC" stat={false} bottomSpace={8} />
            <VendorStatus vendor="CAC" stat bottomSpace={8} />
          </div>

          <div className="calls-overview mb-8">
            <p className="font-semibold leading-10 text-gray-900 text-2xl">
              API Calls Overview
            </p>
            <p className="xl:pb-4">Last update: April 30th 2022</p>
            <div className="overview-card flex xl:space-x-6 w-full">
              <div className="bg-liteBlue rounded-xl shadow border p-6 w-1/3">
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

              <div className="bg-successful rounded-xl shadow border p-6 w-1/3">
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

              <div className="bg-successGreen rounded-xl shadow border p-6 w-1/3">
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

          <div className="institution-call py-6 w-full">
            <p className="font-semibold text-2xl mb-3">
              API Calls by Institution
            </p>
            <div className="category-block flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <select
                  id="payment-category"
                  name="payment-category"
                  autoComplete="category-name"
                  className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-gray-200 rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                  aria-label=".form-select-sm example"
                >
                  <option className="uppercase" selected>
                    CREDEQUITY
                  </option>
                  <option>Bi-Anunal</option>
                  <option>Quarterly</option>
                  <option>Monthly</option>
                </select>
              </div>

              <div className="w-full md:w-1/3 px-3">
                <select
                  id="payment-category"
                  name="payment-category"
                  autoComplete="category-name"
                  className="mt-1 block w-full py-3 px-3 border border-gray-200 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option className="uppercase" selected>
                    TODAY
                  </option>
                  <option>Bi-Anunal</option>
                  <option>Quarterly</option>
                  <option>Monthly</option>
                </select>
              </div>

              <div className="w-full md:w-1/3 px-2 mt-1">
                <GetData />
              </div>
            </div>
          </div>

          <div className="chart-group flex xl:space-x-6 w-full">
            <div className="bg-white rounded-xl shadow border p-6 w-2/3">
              <div className="flex justify-between">
                <p>API Calls by month</p>
                <select id="month-category" name="month-category">
                  <option className="uppercase" selected>
                    Month
                  </option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                </select>
              </div>
              <p className="py-3">No. of successful and Failed API calls made</p>
              <div>
                {' '}
                <BarChart />
              </div>
            </div>
            <div className="relative bg-white rounded-xl shadow border p-6 w-1/3">
              <p className="text-center mb-1">Institutions:</p>
              <div className="flex justify-center">
                <p className="uppercase inline-block">credequity</p>
              </div>
              <p className="cut-out-label absolute left-36 bottom-24 font-normal">API Calls</p>
              <GuageChart />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
