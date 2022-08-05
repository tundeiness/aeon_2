/* eslint-disable react/jsx-props-no-spreading */
// export default Dashboard;
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
// import { lazy } from 'react';
import React, { lazy, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { BiXCircle } from 'react-icons/bi';
import {
  BsPatchCheck,
} from 'react-icons/bs';
import { FaRegThumbsUp, FaRegCheckCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import CountUp from 'react-countup';
import VendorStatus from '../../components/vendorStatus/VendorStatus';
import BarChart from '../../components/charts/Charts';
import GuageChart from '../../components/charts/Donut';
import SidebarNav from '../../components/sideBarNav/sidebar-nav';
import Support from '../../components/support/support';
import { useStateContext } from '../../contexts/ContextProvider';
import { GetData } from '../../components/Buttons/buttonCollections';
import NIMC from '../../static/assets/img/nimc.webp';
import { getInstitution, deleteInstitution } from '../../redux/features/institutionSlice';
import {
  getConnection, getConnectionStatus, getConnectionError, selectAllConnections,
} from '../../redux/features/connectionSlice';
import {
  setUserUpdate,
} from '../../redux/features/userSlice';
import './dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();

  const testUser = JSON.parse(localStorage.getItem('user'));

  const formic = useFormik({
    initialValues: {
      institution: '',
      day: '',
      api: '',
    },
    // validate,
    onSubmit: (values) => {
      // const userData = {
      //   email: values.email,
      //   password: values.password,
      // };
      // dispatch(login(userData));
      // resetForm(values);
    },
  });
  // console.log(testUser.userId);

  // dispatch(getInstitution());

  // console.log(details);

  // if (isFetching) return 'loading...';
  // console.log(testing);
  const {
    activeModal, setActiveModal, isOnline, setIsOnline,
  } = useStateContext();
  const Badge = <img src={NIMC} alt="NIMC" className="h-14 w-16" />;

  const connection = useSelector(selectAllConnections);
  const connectionStatus = useSelector(getConnectionStatus);
  const connectionError = useSelector(getConnectionError);

  console.log(connection);

  const NIMCCheck = connection.serviceName === 'NIN' && connection.info.status === '200';
  const FRSCCheck = connection.serviceName === 'FRSC' && connection.info.status === '200';
  const CACCheck = connection.serviceName === 'BVN' && connection.info.status === '200';

  console.log(NIMCCheck);

  useEffect(() => {
    if (connectionStatus === 'idle') {
      dispatch(getConnection());
    }
  }, [dispatch, connectionStatus]);

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
            <VendorStatus vendor={Badge} stat={NIMCCheck} bottomSpace={4} />
            <VendorStatus vendor="FRSC" stat={FRSCCheck} bottomSpace={8} />
            <VendorStatus vendor="CAC" stat={CACCheck} bottomSpace={8} />
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
                    <CountUp end={3010} duration={5} />
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
                    <CountUp end={3000} duration={5} />
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
                    <CountUp end={10} duration={5} />
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
                    <CountUp end={100} duration={5} suffix="%" />
                  </p>
                  <BsPatchCheck className="text-white text-4xl font-semibold" />
                </div>
              </div>
            </div>
          </div>

          <form
            className="institution-call py-6 w-full"
            onSubmit={formic.handleSubmit}
          >
            <p className="font-semibold text-2xl mb-3">
              API Calls by Institution
            </p>
            <div className="category-block flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <select
                  id="institution"
                  name="institution"
                  className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-gray-100 text-gray-400 rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                  value={formic.values.institution}
                  onChange={formic.handleChange}
                  {...formic.getFieldProps('institution')}
                >
                  <option value="CREDEQUITY" label="CREDEQUITY">
                    CREDEQUITY
                  </option>
                  <option value="Bi-Annual" label=" Bi-Annual">
                    Bi-Anunal
                  </option>
                  <option value="Quarterly" label="Quarterly">
                    Quarterly
                  </option>
                  <option value="Monthly" label="Monthly">
                    Monthly
                  </option>
                </select>
              </div>

              <div className="w-full md:w-1/3 px-3">
                <select
                  id="day"
                  name="day"
                  className="mt-1 block w-full py-3 px-3 border border-gray-200 bg-gray-100 text-gray-400 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  value={formic.values.day}
                  onChange={formic.handleChange}
                  {...formic.getFieldProps('day')}
                >
                  <option value="Today" label="Today">
                    Today
                  </option>
                  <option value="Bi-Annual" label=" Bi-Annual">
                    Bi-Anunal
                  </option>
                  <option value="Quarterly" label="Quarterly">
                    Quarterly
                  </option>
                  <option value="Monthly" label="Monthly">
                    Monthly
                  </option>
                </select>
              </div>

              <div className="w-full md:w-1/3 px-2 mt-1">
                <GetData />
              </div>
            </div>
          </form>

          <div className="chart-group flex xl:space-x-6 w-full">
            <div className="bg-white rounded-xl shadow border p-6 w-2/3">
              <form
                className="flex justify-between"
                onSubmit={formic.handleSubmit}
              >
                <p>Today</p>
                <select
                  id="api"
                  name="api"
                  value={formic.values.api}
                  onChange={formic.handleChange}
                  {...formic.getFieldProps('api')}
                >
                  <option value="NIN" label="NIN">
                    NIN
                  </option>
                  <option value="FRSC" label="FRSC">
                    FRSC
                  </option>
                  <option value="Credit Bureau" label="Credit Bureau">
                    Credit Bureau
                  </option>
                  <option value="Business Search" label="Business Search">
                    Business Search
                  </option>
                </select>
              </form>
              <p className="text-xs pb-8 text-gray-400">
                No. of successful and Failed API calls made
              </p>
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
              <p className="cut-out-label absolute left-36 bottom-24 font-normal">
                API Calls
              </p>
              <GuageChart />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
