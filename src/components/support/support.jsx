/* eslint-disable no-unused-vars */
import React from 'react';
import { FiUser } from 'react-icons/fi';

const SupportButton = () => {
  const test = 0;
  return (
    <div className="flex items-center py-2 rounded-lg bg-supportBg text-gray-900 hover:cursor-pointer">
      <FiUser className="xl:mx-2" />
      <p className="xl:mr-2">support@credequity.com</p>
    </div>
  );
};

export default SupportButton;
