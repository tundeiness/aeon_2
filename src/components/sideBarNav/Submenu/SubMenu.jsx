/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useRef, useEffect } from 'react';
import {
  Link, useLocation, useResolvedPath, NavLink,
} from 'react-router-dom';

const SubMenu = ({ item, key }) => {
  const temi = 0;
  const ref = useRef(null);
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

  const [getClass, setGetClass] = useState(null);

  console.log(resolvedLocation.pathname);
  // console.log(getClass);

  const showSubLink = () => setSubLink(!subLink);
  console.log(pathlink);
  console.log(item.path);

  useEffect(() => {
    // const check = ref.current.classList.contains('active');
    // setGetClass(
    //   ref.current.className
    //     === 'flex justify-between items-center py-2 px-3 rounded first-child  active',
    // );
    // console.log('className 👉️', ref.current.className);
    setGetClass(
      ref.current.className
        === 'flex justify-between items-center py-2 px-3 rounded first-child  active',
    );

    if (getClass) {
      // console.log('I am here');
    }

    // 👇️ check if element contains class
    // if (ref.current.classList.contains('active')) {
    //   console.log('Element contains class');
    // } else {
    //   console.log('Element does NOT contain class');
    // }
  }, [getClass]);

  return (
    <>
      <NavLink
        to={item.path}
        key={key}
        className={`flex justify-between items-center py-2 px-3 rounded first-child ${
          pathlink ? 'top' : ''
        }`}
        onClick={item.subnav && showSubLink}
        ref={ref}
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
            className={`flex items-center mt-2 mb-1 py-1 pl-5 w-[96%] rounded hover:cursor-pointer second-child ${
              pathlink === item.path ? '' : ''
            }`}
            to={itm.path}
          >
            {itm.icon}
            <span className="inline-block ml-2">{itm.title}</span>
          </NavLink>
        ))}
    </>
  );
};

export default SubMenu;
