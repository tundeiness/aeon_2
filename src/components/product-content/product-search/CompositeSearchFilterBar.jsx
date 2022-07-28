/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { GoButton, SearchButton } from '../../Buttons/buttonCollections';
import { searchedInstitution } from '../../../redux/features/institutionSlice';
import {
  searchProductByCode,
  searchProductByName,
} from '../../../redux/features/productSlice';
import ProductFilterBar from '../product-filter/ProductFilterBar';

const CompositeSearchFilterBar = () => {
  const nameRef = useRef('');
  const searchRef = useRef('');
  const codeRef = useRef('');
  const dispatch = useDispatch();

  const handleSearchProduct = () => {
    if (searchRef.current.value) {
      dispatch(searchProductByCode(searchRef.current.value));
    }

    if (nameRef.current.value) {
      dispatch(searchProductByName(nameRef.current.value));
    }
  };
  return (
  // <div className="flex flex-row justify-end w-1/2 py-2">
  //   <div className="flex flex-row  items-center space-x-4 w-4/5">
  //     <div className="search-wrapper w-full relative">
  //       <FiSearch className="absolute z-10 top-3.5 left-2 text-xl" />
  //       <input
  //         type="search"
  //         placeholder="Search"
  //         className="relative pl-8 py-3 rounded-lg w-full border border-gray-200 focus:outline-none"
  //         onChange={handleSearchInstitution}
  //         ref={searchRef}
  //       />
  //     </div>
  //     <div className="flex flex-col items-center justify-center">
  //       <GoButton />
  //     </div>
  //   </div>
  // </div>

    <div className="flex flex-row justify-between w-full mb-5">
      <div className="w-1/4 mr-2">
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="name"
        >
          Name
          {' '}
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
          type="text"
          name="name"
          id="name"
          ref={nameRef}
          // onChange={handleSearchProduct}
        />
      </div>

      <div className="w-1/4 px-3">
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="code"
        >
          Code
          {' '}
        </label>
        <input
          className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
          type="text"
          name="code"
          id="code"
          ref={searchRef}
          // onChange={handleSearchProduct}
        />
      </div>
      <ProductFilterBar />

      <div className="flex flex-col justify-end w-1/4">
        <SearchButton onClick={handleSearchProduct} />
      </div>
    </div>
  );
};

export default CompositeSearchFilterBar;
