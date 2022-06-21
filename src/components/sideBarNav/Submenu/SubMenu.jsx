/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import {
  Link, useLocation, useResolvedPath, NavLink,
} from 'react-router-dom';

const SubMenu = ({ item, key }) => {
  const temi = 0;
  const location = useLocation();
  // const routeMatches = matchRoutes(location);
  // console.log(routeMatches);
  const isActive = location.pathname;
  const [subLink, setSubLink] = useState(false);
  const [pathlink, setPathlink] = useState(location.pathname);
  const [activePage, setActivePage] = useState(true);
  const [childPage, setChildPage] = useState(false);
  const resolvedLocation = useResolvedPath(location.pathname);
  const [linkName, setLinkName] = useState(item.path);

  console.log(resolvedLocation.pathname);

  const showSubLink = () => setSubLink(!subLink);
  console.log(pathlink);
  console.log(item.path);
  return (
    <>
      <NavLink
        to={item.path}
        key={key}
        className={`flex justify-between items-center py-2 px-3 rounded ${
          pathlink === item.path ? '' : ''
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
      </NavLink>
      {subLink
        && item.subnav.map((itm, _indx) => (
          <NavLink
            key={itm.id}
            className={`flex items-center mt-2 mb-1 py-1 pl-5 w-[96%] rounded hover:cursor-pointer ${
              pathlink === item.path ? '' : ''
            }`}
            to={itm.path}
          >
            {itm.icon}
            <span className="inline-block">{itm.title}</span>
          </NavLink>
        ))}
    </>
  );
};

export default SubMenu;
