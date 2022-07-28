/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterButton } from '../../Buttons/buttonCollections';
import {
  filteredInstitutions,
  filterInstitutionStatus,
  getInstitution,
} from '../../../redux/features/institutionSlice';

const ProductFilterBar = () => {
  const inputRef = useRef('');
  const dispatch = useDispatch();

  const [status, setStatus] = useState('');

  const handleFilterInstitutions = () => {
    dispatch(filteredInstitutions(inputRef.current.value));
  };

  const handleFilterInstitutionByStatus = (category) => {
    dispatch(filterInstitutionStatus(category));
  };

  useEffect(() => {
    dispatch(getInstitution());
  }, [dispatch]);

  console.log(status);
  return (
    <div
      className="flex flex-row justify-between w-1/2 py-4"
    >
      <input
        placeholder="Institution Name"
        className="relative py-2 pl-3 w-1/2 rounded-lg border border-gray-200 focus:outline-none"
        onChange={handleFilterInstitutions}
        ref={inputRef}
      />

      <div className="w-1/3 px-3 mb-6 md:mb-0">
        <select
          id="status"
          name="status"
          className="mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
          onChange={(e) => {
            const selectedStatus = e.target.value;
            setStatus(selectedStatus);
            handleFilterInstitutionByStatus(e.target.value);
          }}
          value={status}
        >
          <option value="" label="Status">
            Status
          </option>
          <option value="Active" label="Active">
            Active
          </option>
          <option value="InActive" label="InActive">
            InActive
          </option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FilterButton />
      </div>
    </div>
  );
};

export default ProductFilterBar;
