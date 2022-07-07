/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line react/no-unescaped-entities
import { AiOutlineLeft, AiOutlineCloudUpload } from 'react-icons/ai';
import { FiFeather } from 'react-icons/fi';
import React, { useState, useRef } from 'react';
import SupportButton from '../support/support';
import time from '../../static/assets/img/time.svg';
import userimage from '../../static/assets/img/userimage.svg';

export const Title = (props) => {
  const { title } = props;
  return (
    <>
      <div className="flex justify-between align-middle font-medium">
        <h1 className="text-3xl">
          {' '}
          {title}
        </h1>
        <SupportButton />
      </div>
      <hr className="mt-4" />
    </>
  );
};

export const CardBodyLayout = (props) => {
  const { children } = props;
  return (
    <div className="w-4/5 ml-auto">
      <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
        <div className="institution-wrapper overflow-y-auto p-8 h-full bg-white rounded-tl-3xl rounded-bl-3xl">
          {children}
        </div>
      </section>
    </div>
  );
};

export const CardLayout = (props) => {
  const { children } = props;
  return (
    <div className="rounded-lg w-full h-full shadow-md p-4 mt-4">
      {children}
    </div>
  );
};

export const IdentityCheck = () => (
  <article className="w-4/5 ml-auto">
    <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
      <div className="institution-wrapper p-8 h-full bg-white rounded-tl-3xl rounded-bl-3xl">
        <Title title="Identity check" />
        <CardLayout>
          <h1 className="font-bold text-black"> Terms of use</h1>
          <p className="text-sm mt-2">
            {' '}
            I have consent from the owner of the details I
            provide below to fetch and display their
            data for identity verification.
            {' '}

          </p>
          <form>
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

export function NinData() {
  return (
    <div className="flex w-full gap-20">
      <div className="w-1/4 flex flex-col justify-center">
        <img src={userimage} alt="the user" />
        <div className="flex flex-col justify-center p-4 rounded-lg mt-4 bg-[#F1F8FF]">
          <h6 className="text-black w-full font-bold"> Contact Information</h6>
          <hr className=" w-full mt-2 " />
          <div className="flex flex-col mt-2">
            <small className="text-slate-200">
              Phone Number
            </small>
            <h6 clasName="text-sm">
              080487383738
            </h6>
          </div>
          <div className="flex flex-col mt-2">
            <small className="text-slate-200">
              Email
            </small>
            <h6 clasName="text-sm">
              jumoke@gmail.com
            </h6>
          </div>
          <div className="flex flex-col mt-2">
            <small className="text-slate-200">
              Residential Address
            </small>
            <h6 clasName="text-sm ">
              2 Yomi Ajasola Street, Lamgbasa
            </h6>
          </div>
          <div className="flex flex-col mt-2">
            <small className="text-slate-200">
              Town
            </small>
            <h6 clasName="text-sm ">
              Ajah
            </h6>
          </div>
          <div className="flex flex-col mt-2">
            <small className="text-slate-200">
              LGA of Residence
            </small>
            <h6 clasName="text-sm ">
              Eti-Osa
            </h6>
          </div>
          <div className="flex flex-col mt-2">
            <small className="text-slate-200">
              State of Residence
            </small>
            <h6 clasName="text-sm ">
              Lagos state
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/3">
        <h6 className="text-blue-900 w-full font-bold py-4"> Personal Information</h6>
        <hr clasName="w-full" />
        <div className="fle flex-col justify-between">
          <div className=" w-full" />
        </div>
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300"> Title</small>
                <h6> MR</h6>
              </div>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300"> First Name</small>
                <h6> BABATUNDE</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> SurName</small>
              <h6> AJILEYE</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Gender</small>
                <h6> Male</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Date of birth</small>
              <h6> 12-07-84</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Religion</small>
                <h6> CHRISTIANITY</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Employment Status</small>
              <h6> EMPLOYED</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-2">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Nigerian Language</small>
                <h6> YORUBA </h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Profession </small>
              <h6> FINANCE </h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-2">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  NIN</small>
                <br />
                <button type="submit" className="bg-blue-900 p-2 rounded-lg flex align-middle text-white gap-2">
                  <FiFeather />
                  {' '}
                  View Signature
                </button>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Tracking ID</small>
              <h6> S7Y0NYFLE0004D6 </h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
      </div>
    </div>
  );
}

export function FRSCData() {
  return (
    <div className="flex w-full gap-20">
      <div className="w-1/4 flex flex-col">
        <img src={userimage} alt="the user" />
      </div>
      <div className="flex flex-col w-2/3">
        <h6 className="text-blue-900 w-full font-bold py-4"> Information</h6>
        <hr clasName="w-full" />
        <div className="fle flex-col justify-between">
          <div className=" w-full" />
        </div>
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300"> Licenses Number</small>
                <h6> EKY07019AB01</h6>
              </div>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300"> First Name</small>
                <h6> BABATUNDE</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> SurName</small>
              <h6> AJILEYE</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Gender</small>
                <h6> Male</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Date of birth</small>
              <h6> 12-07-84</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Date Issued</small>
                <h6> 2019-07-17</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Expring Date</small>
              <h6> 2024-07-22</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-2">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  State Issued</small>
                <h6> LAGOS </h6>
              </div>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
      </div>
    </div>
  );
}

export function BvnData() {
  return (
    <div className="flex w-full gap-20">
      <div className="w-1/4 flex flex-col">
        <img src={userimage} alt="the user" />
      </div>
      <div className="flex flex-col w-2/3">
        <h6 className="text-blue-900 w-full font-bold py-4"> Information</h6>
        <hr clasName="w-full" />
        <div className="fle flex-col justify-between">
          <div className=" w-full" />
        </div>
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300"> BVN</small>
                <h6> 23456718956</h6>
              </div>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300"> First Name</small>
                <h6> BABATUNDE</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> SurName</small>
              <h6> AJILEYE</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Gender</small>
                <h6> Male</h6>
              </div>
            </div>
            <div className="w-2/3">
              <small className=" text-slate-300"> Date of birth</small>
              <h6> 12-07-84</h6>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
        <div className="w-3/4 py-4">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <small className=" text-slate-300">  Phone Number</small>
                <h6> 08067070812</h6>
              </div>
            </div>
          </div>
        </div>
        <hr clasName="w-full" />
      </div>
    </div>
  );
}
export function IdentityCheckResult() {
  return (
    <CardBodyLayout>
      <Title title="Identity check result" />
      <div className="w-full mt-4">
        <button type="submit" className="bg-blue-900 w-1/6 rounded-lg flex items-center gap-4 justify-center text-white p-2">
          <AiOutlineLeft />
          {' '}
          Back
        </button>
      </div>
      <div className="flex mt-16 ml-32 align-middle">
        <div className="flex w-1/2">
          <img src={time} alt="moment" />
          <div className="flex flex-col ml-2 w-full ">
            <small> Search duration</small>
            <h6> 6.43 Seconds</h6>
          </div>
        </div>
        <div className="border-l-2 mr-6 "> </div>
        <div className="w-full">
          <h4 className="font-bold"> Showing result for:</h4>
          <h1 className="stretch text-4xl"> NIN</h1>
        </div>
      </div>
      <CardLayout>
        <div className="flex flex-col w-full justify-center ">
          <section className="bg-blue-400 p-2 text-white  rounded-lg flex justify-between">
            <button className=" text-white rounded-lg p-2 w-1/3  hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black "> NIN </button>
            <button className=" text-white rounded-lg p-2 w-1/3  hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black "> FRSC </button>
            <button className=" text-white rounded-lg p-2 w-1/3  hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black "> BVN </button>

          </section>
        </div>
        <hr className="mt-4" />
        {/* <NinData /> */}
        {/* <FRSCData /> */}
        <BvnData />
      </CardLayout>
    </CardBodyLayout>
  );
}

export function CreditReport() {
  return (
    <CardBodyLayout>
      <Title title="Credit Report" />
      <CardLayout>
        <h1 className="font-bold text-black"> Terms of use</h1>
        <p className="text-sm mt-2">
          {' '}
          I have consent from the owner of the details I
          provide below to fetch and display their
          data for identity verification.
          {' '}

        </p>
        <form>
          <div className="mt-2">
            <input
              type="checkbox"
              id="scales"
              name="terms"
            />
            <label htmlFor="terms" className="text-sm mt-2"> I agree to the terms outlined above.</label>
          </div>
          <div className="rounded-lg w-11/12 h-75 mt-4  bg-[#F9F9F9] flex flex-col overflow-y-scroll p-8 shadow-md border-2">
            <div className="flex flex-col">
              <label htmlFor="firstname" className="font-medium"> Customer First Name</label>
              <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="phone_number" className="font-medium"> Phone Number:</label>
              <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" />
            </div>
            <button type="submit" className="border-2 w-1/4 rounded-lg mt-2 bg-blue-900 text-white p-4">
              Search
            </button>
          </div>

        </form>
      </CardLayout>
    </CardBodyLayout>
  );
}

const Data = () => (
  <>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Full Name</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> ZAINAB BAMIDELE ABIOLA </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Date of Birth</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> 27-Sep-1980 </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Gender</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> Female</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> BVN</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> 22299562935</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Phone number</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> 8072682335 8033411025</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Linked Accounts</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">8</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Has Collected a Loan</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">Yes</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Loan Amounts</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">18,683,846</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]">Last Updated Date</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">3/30/2022 9:51:58 AM</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Delinquency</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">Delinquency</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> Score</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">230</h5>
        {' '}
      </div>
    </div>
  </>
);

const Performance = () => (
  <>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> ACCOUNT BALANCE</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> Data </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> APPROVED AMOUNT</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> Data </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> DATA_ID</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> Data </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> DISHONORED CHEQUES COUNT</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> Data</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> FACILITIES COUNT</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium"> Data </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> INSTITUTION NAME</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">Data </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> NON PERFORMING FACILITY</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">Data</h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]"> OVERDUE AMOUNT</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">Data </h5>
        {' '}
      </div>
    </div>
    <div className="w-full flex border-y-2">
      <div className="bg-[#F4F8FF] p-2 w-2/4 ">
        {' '}
        <h1 className="pl-10 text-[#A3A3A3]">PERFORMING FACILITES</h1>
      </div>
      <div className="w-full p-2">
        {' '}
        <h5 className="pl-10 font-medium">Data</h5>
        {' '}
      </div>
    </div>
  </>
);
export function IdentityCheck2() {
  const [data, setData] = useState(true);
  return (
    <CardBodyLayout>
      <Title title="Identity Check result" />
      <div className="w-full mt-4">
        <button type="submit" className="bg-blue-900 w-2/10 rounded-lg flex items-center gap-2 justify-center text-white p-2">
          <AiOutlineLeft />
          {' '}
          Back
        </button>
      </div>
      <div className="flex mt-16 ml-32 align-middle">
        <div className="flex w-1/2">
          <img src={time} alt="moment" />
          <div className="flex flex-col ml-2 w-full ">
            <small> Search duration</small>
            <h6> 6.43 Seconds</h6>
          </div>
        </div>
        <div className="border-l-2 mr-6 "> </div>
        <div className="w-full">
          <h4 className="font-bold"> Showing result for:</h4>
          <h1 className="stretch text-4xl"> Credit Report </h1>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-8">
        <section className="bg-blue-400 p-2 text-white  rounded-lg flex justify-between">
          <button className=" text-white rounded-lg p-2 w-1/2  hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black " onClick={() => setData(true)}> DATA </button>
          <button className=" text-white rounded-lg p-2 w-1/2  hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black " onClick={() => setData(false)}> PERFORMANCE SUMMARY </button>
        </section>
      </div>
      <hr className="mt-4" />
      <CardLayout>
        {data ? (
          <Data />
        ) : (
          <div>
            <Performance />
          </div>
        ) }
      </CardLayout>
    </CardBodyLayout>
  );
}

export function OCRUpload() {
  const checkBoxRef = useRef();
  // console.log('Checkbox value::', checkBoxRef.current.checked);
  return (
    <CardBodyLayout>
      <Title title="Optical Character Recognition" />
      <h1 className="font-bold text-black"> Terms of use</h1>
      <p className="text-sm mt-2">
        {' '}
        I have consent from the owner of the details I
        provide below to fetch and display their
        data for identity verification.
        {' '}

      </p>
      <form>
        <div className="mt-2">
          <input
            type="checkbox"
            id="scales"
            name="terms"
            ref={checkBoxRef}
          />
          <label htmlFor="terms" className="text-sm mt-2"> I agree to the terms outlined above.</label>
        </div>
        <div className="flex justify-center items-center w-full mt-12">
          <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-1/2 h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <AiOutlineCloudUpload className=" w-1/4 h-1/4" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Select file  or drag and drop</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG or PDF, file size no more than 10MB </p>
              <button className="rounded-lg border-blue-700 border-2 bg-white text-blue-700 p-2 mt-4 "> Select File</button>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </form>
    </CardBodyLayout>
  );
}

export function SearchResultTop(props) {
  const {
    duration, result, buttonText, HandleBack,
  } = props;
  return (
    <>
      <div className="w-full mt-4">
        <button onClick={HandleBack} type="submit" className="bg-blue-900 w-1/6 rounded-lg flex items-center gap-4 justify-center text-white p-2">
          <AiOutlineLeft />
          {' '}
          {buttonText}
        </button>
      </div>
      <div className="flex mt-16 ml-32 align-middle">
        <div className="flex w-1/2">
          <img src={time} alt="moment" />
          <div className="flex flex-col ml-2 w-full ">
            <small> Search duration</small>
            <h6>
              {duration}
              {' '}
            </h6>
          </div>
        </div>
        <div className="border-l-2 mr-6 "> </div>
        <div className="w-full">
          <h4 className="font-bold"> Showing result for:</h4>
          <h1 className="stretch text-4xl">
            { result }
            {' '}
          </h1>
        </div>
      </div>

    </>
  );
}

export const BusinessSearchResult = () => (
  <CardBodyLayout>
    <Title title=" Business Search Result" />
    <SearchResultTop duration="0.09938983" result="Business Search" buttonText="Back to search" HandleBack={() => console.log('Done!')} />
    <CardLayout>
      <div className="w-full flex border-y-2 mt-6">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> Company Name</h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium"> CREDEQUITY </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> RC Number</h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium"> RC1477749 </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> Date of Incorporation</h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium"> 2020-11-10 </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> Business Address</h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium"> 13A, Charles Ifeanyi street, Off Adebayo Doherty road, Lekki Phase 1,Lagos, Nigeria</h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> Email Address</h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium"> text@example.com </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> Company Status </h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium">
            <button className="p-2 rounded-lg bg-green-500 text-white"> Active</button>
            {' '}
          </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> Directors</h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium">
            Mr. A
            Designation: Director

          </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 ">
          <h1 className="pl-10 text-[#A3A3A3]"> </h1>
        </div>
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium">
            Mr. B
            Designation: Company Secretary
            {' '}

          </h5>
        </div>
      </div>
      <div className="w-full flex border-y-2">
        <div className="bg-[#F4F8FF] p-2 w-2/4 " />
        <div className="w-full p-2">
          <h5 className="pl-10 font-medium">
            Mr. C
            Designation: Shareholder

          </h5>
        </div>
      </div>
    </CardLayout>
  </CardBodyLayout>
);

export function BusinessSearch() {
  return (
    <CardBodyLayout>
      <Title title="Business Search (CAC)" />
      <CardLayout>
        <h1 className="font-bold text-black"> Terms of use</h1>
        <p className="text-sm mt-2">
          {' '}
          I have consent from the owner of the details I
          provide below to fetch and display their
          data for identity verification.
          {' '}

        </p>
        <form>
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
              <label htmlFor="phoneNumber" className="font-medium"> RC Number</label>
              <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" placeholder="Enter RC number here" />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="bvn" className="font-medium"> Company Name </label>
              <input type="text" className="bg-white p-2 w-1/2 border-2 mt-2 rounded" placeholder="Enter Company name here" />
            </div>
            <button type="submit" className="border-2 w-1/4 rounded-lg mt-2 bg-blue-900 text-white p-4">
              Search
            </button>
          </div>

        </form>
      </CardLayout>
    </CardBodyLayout>
  );
}
