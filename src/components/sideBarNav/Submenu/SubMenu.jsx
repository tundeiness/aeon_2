/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const temi = 0;
  const location = useLocation();
  // const isActive = location.pathname;
  const [subLink, setSubLink] = useState(false);
  const [pathlink, setPathlink] = useState(location.pathname);

  const showSubLink = () => setSubLink(!subLink);
  // console.log(item);
  return (
    <>
      <Link
        to={item.path}
        className={`flex justify-between items-center py-2 px-3 rounded hover:bg-authBtn outline outline-gray-50 ${
          pathlink === item.path ? 'bg-authBtn' : ''
        }`}
        onClick={item.subnav && showSubLink}
      >
        <span className="flex flex-row items-end font-medium">
          {item.icon}
          <span className="inline-block ml-3">{item.title}</span>
        </span>
        <span className="inline-block">
          {item.subnav && subLink
            ? item.iconOpen
            : item.subnav
              ? item.iconClosed
              : null}
        </span>
      </Link>
      {subLink
        && item.subnav.map((itm, _indx) => (
          <Link
            key={itm.id}
            className="flex items-center mt-2 mb-1 py-1 pl-5 w-[96%] rounded hover:cursor-pointer bg-authBtn outline outline-white"
            to={itm.path}
          >
            {itm.icon}
            <span className="inline-block">{itm.title}</span>
          </Link>
        ))}
    </>
  );
};

export default SubMenu;
