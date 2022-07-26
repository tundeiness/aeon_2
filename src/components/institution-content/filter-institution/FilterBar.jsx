/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { FilterButton } from '../../Buttons/buttonCollections';
import {
  filteredInstitutions,
  filterInstitutionStatus,
} from '../../../redux/features/institutionSlice';

const FilterBar = () => {
  const inputRef = useRef('');
  const selectRef = useRef('');
  const dispatch = useDispatch();

  const [choice, setChoice] = useState();

  // const options = new Array(10).fill(0).map((item, index) => ({
  //   value: index,
  //   label: `Option ${index}`,
  // }));

  const handleFilterInstitutions = () => {
    dispatch(filteredInstitutions(inputRef.current.value));
  };

  const handleFilterInstitutionByStatus = () => {
    selectRef.current.focus();
    dispatch(filterInstitutionStatus(selectRef.current.focus()));
  };

  console.log(selectRef.current.focus);
  return (
    <form
      className="flex flex-row justify-between w-1/2 py-4"
    >
      <input
        placeholder="Institution Name"
        className="relative py-2 pl-3 w-1/2 rounded-lg border border-gray-200"
        onChange={handleFilterInstitutions}
        ref={inputRef}
      />

      <div className="w-1/3 px-3 mb-6 md:mb-0">
        <select
          id="status"
          name="status"
          className="mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
        >
          <option value="" label="Status">
            Status
          </option>
          <option value="Active" label="Active">
            Active
          </option>
          <option value="Inactive" label="Inactive">
            Inactive
          </option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FilterButton />
      </div>
    </form>
  );
};

export default FilterBar;
