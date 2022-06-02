/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SubMenu = ({ item }) => {
  const temi = 0;
  return (
    <Link to="./" className="flex justify-between items-center">
      <span className="inline-block">
        {item.icon}
        <span className="inline-block">{item.icon}</span>
      </span>

    </Link>
  );
};

export default SubMenu;
