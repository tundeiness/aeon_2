/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FilterButton } from '../../Buttons/buttonCollections';
import { filteredInstitutions } from '../../../redux/features/institutionSlice';

const SearchBar = () => {
  const test = 0;
  const inputRef = useRef('');
  const dispatch = useDispatch();
  const handleFilterInstitutions = () => {
    dispatch(filteredInstitutions(inputRef.current.value));
  };
  return (
    <form className="flex flex-row justify-between w-1/2 py-4">
      <input
        placeholder="Institution Name"
        className="relative py-2 pl-3 w-1/2 rounded-lg border border-gray-200"
        onChange={handleFilterInstitutions}
        ref={inputRef}
      />

      <div className="w-1/3 px-3 mb-6 md:mb-0">
        <select
          id="status-category"
          name="status-category"
          className="mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
          onChange={(e) => {
            // setFilterParam(e.target.value);
          }}
        >
          <option selected>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FilterButton />
      </div>
    </form>
  );
};

export default SearchBar;
