/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { GoButton } from '../../Buttons/buttonCollections';
import { searchedInstitution } from '../../../redux/features/institutionSlice';

const SearchBar = () => {
  const searchRef = useRef('');
  const dispatch = useDispatch();
  const handleSearchInstitution = () => {
    dispatch(searchedInstitution(searchRef.current.value));
  };
  return (
    <div className="flex flex-row justify-end w-1/2 py-2">
      <div className="flex flex-row  items-center space-x-4 w-4/5">
        <div className="search-wrapper w-full relative">
          <FiSearch className="absolute z-10 top-3.5 left-2 text-xl" />
          <input
            type="search"
            placeholder="Search"
            className="relative pl-8 py-3 rounded-lg w-full border border-gray-200 focus:outline-none"
            onChange={handleSearchInstitution}
            ref={searchRef}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <GoButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
