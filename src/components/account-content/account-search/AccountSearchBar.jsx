/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SearchButtonUtilization,
  ExportButton,
} from '../../Buttons/buttonCollections';
import {
  createInstitution,
  selectAllInstitutions,
} from '../../../redux/features/institutionSlice';

const AccountSearchBar = () => {
  const test = 0;
  const institutionList = useSelector(selectAllInstitutions);

  const optionList = institutionList.map((institution) => (
    <option
      key={institution.id}
      value={institution.code}
      label={institution.name}
    />
  ));
  return (
    <div className="flex flex-row justify-between w-full mb-6">
      <div className="w-1/3 pr-6">
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="balance"
        >
          Balance as at
          <input
            className="block w-full text-gray-700 border rounded-lg py-3 px-3 mt-2 leading-tight focus:outline-none focus:bg-white "
            id="balance"
            type="text"
            placeholder="Day"
          />
        </label>
      </div>
      <div className="w-1/3 pl-6 pr-2">
        {' '}
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="category"
        >
          Institutions
          {' '}
        </label>
        <select
          id="category"
          name="category"
          className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
        >
          <option value="" label="" aria-label="Select" />
          {/* <option value="PrePaid" label=" PrePaid">
                    PrePaid
                  </option>
                  <option value="PostPaid" label="PostPaid">
                    PostPaid
                  </option> */}
          {optionList}
        </select>
      </div>
      <div className="w-1/3 pl-4">
        <div className=" flex flex-row justify-around mt-7">
          <button
            className="bg-buttonTwo mr-3 px-14 py-3 rounded-md text-white font-medium text-sm"
            type="button"
          >
            Search
          </button>
          <button
            className="bg-headingBg ml-3 px-14 py-3 rounded-md text-white font-medium text-sm"
            type="button"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSearchBar;
