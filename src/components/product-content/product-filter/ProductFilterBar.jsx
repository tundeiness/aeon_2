/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  filterProductStatus,
  getAllProducts,
} from '../../../redux/features/productSlice';

const ProductFilterBar = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState('');

  const handleFilterProductByStatus = (category) => {
    dispatch(filterProductStatus(category));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(status);
  return (
    <div className="w-1/4 px-3">
      <label
        className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
        htmlFor="status"
      >
        status
      </label>
      <select
        id="status"
        name="status"
        className="mt-1 block w-full py-3 px-2 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
        value={status}
        onChange={(e) => {
          const selectedStatus = e.target.value;
          setStatus(selectedStatus);
          handleFilterProductByStatus(e.target.value);
        }}
      >
        <option value="" label="Status">
          Status
          {' '}
        </option>
        <option value="Active" label="Active">
          Active
          {' '}
        </option>
        {' '}
        <option value="InActive" label="InActive">
          InActive
          {' '}
        </option>
      </select>
    </div>

  );
};

export default ProductFilterBar;
