/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllUsers,
  getUserStatus,
  getUserError,
  getAllUsers,
  filterUserByStatus,
  filterUserByRole,
  searchedUser,
} from '../../../redux/features/userSlice';

const NameStatusRoleFilterBar = () => {
  const username = useRef();
  const dispatch = useDispatch();
  const [status, setStatus] = useState('');
  const [role, setRole] = useState('');

  const user = useSelector(selectAllUsers);
  const userStatus = useSelector(getUserStatus);
  const userError = useSelector(getUserError);

  const handleFilterUserByRole = () => {
    // some codes
    dispatch(filterUserByRole(role));
  };

  const handleFilterUserByStatus = () => {
    // some codes
    dispatch(filterUserByStatus(status));
  };

  const handleSearchUserByName = () => {
    // some codes
    dispatch(searchedUser(username));
  };

  //  const handleFilterProductByStatus = (category) => {
  //    dispatch(filterProductStatus(category));
  //  };

  useEffect(() => {
    //  dispatch(getAllProducts());
    if (userStatus === 'idle') {
      dispatch(getAllUsers());
    }
  }, [dispatch]);
  console.log(username);

  return (
    <div className="flex flex-row w-full mb-4">
      <div className="w-1/3 px-1 mb-6 md:mb-0">
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="username"
        >
          Username
          <input
            className="block w-full text-gray-700 border rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white "
            id="username"
            type="text"
            placeholder="Enter Username"
            ref={username}
            onChange={handleSearchUserByName}
          />
        </label>
      </div>
      <div className="w-1/3 px-1 mb-6 md:mb-0">
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="category"
        >
          Status
          {' '}
        </label>
        <select
          id="category"
          name="category"
          className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
          value={status}
          onChange={(e) => {
            const selectedStatus = e.target.value;
            setStatus(selectedStatus);
            handleFilterUserByStatus(status);
          }}
        >
          <option value="" label="Select Status">
            Select Status
          </option>
          <option value="Active" label="Active">
            Active
          </option>
          <option value="InActive" label="InActive">
            InActive
          </option>
        </select>
      </div>
      <div className="w-1/3 px-1 mb-6 md:mb-0">
        <label
          className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
          htmlFor="category"
        >
          Select Role
          {' '}
        </label>
        <select
          id="category"
          name="category"
          className="form-select mt-1 block w-full py-3 px-3 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
          value={role}
          onChange={(e) => {
            const selectedRole = e.target.value;
            setRole(selectedRole);
            handleFilterUserByRole(e.target.value);
          }}
        >
          <option value="" label="Select Role">
            Select Role
          </option>
          <option value="PrePaid" label=" PrePaid">
            PrePaid
          </option>
          <option value="PostPaid" label="PostPaid">
            PostPaid
          </option>
        </select>
      </div>
    </div>
  );
};

export default NameStatusRoleFilterBar;
