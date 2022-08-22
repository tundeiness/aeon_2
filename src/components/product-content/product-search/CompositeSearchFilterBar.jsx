/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SearchButton } from '../../Buttons/buttonCollections';
import {
  searchProductByCode,
  searchProductByName,
} from '../../../redux/features/productSlice';
import ProductFilterBar from '../product-filter/ProductFilterBar';

const CompositeSearchFilterBar = () => {
  const nameRef = useRef('');
  const codeRef = useRef('');
  const dispatch = useDispatch();

  const handleSearchProduct = () => {
    if (codeRef.current.value) {
      dispatch(searchProductByCode(codeRef.current.value));
    }

    if (nameRef.current.value) {
      dispatch(searchProductByName(nameRef.current.value));
    }
  };
  return (
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
          ref={codeRef}
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
