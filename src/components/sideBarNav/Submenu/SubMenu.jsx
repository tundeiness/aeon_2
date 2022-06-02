/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SubMenu = ({ item }) => {
  const temi = 0;
  const [subLink, setSubLink] = useState(false);

  const showSubLink = () => setSubLink(!subLink);
  return (
    <>
      <Link
        to="./"
        className="flex justify-between items-center hover:bg-authBtn"
        onClick={item.subNav && showSubLink}
      >
        <span className="inline-block">
          {item.icon}
          <span className="inline-block">{item.title}</span>
        </span>
        <span className="inline-block">
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </span>
      </Link>
      {
        subLink && item.subNav.map((itm, indx) => (
          <Link key={itm.id} className="flex items-center py-1 bg-authBtn" to={item.path}>
            {item.icon}
          </Link>
        ))
      }
    </>
  );
};

export default SubMenu;
