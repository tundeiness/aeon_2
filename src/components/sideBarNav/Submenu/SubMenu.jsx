/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const temi = 0;
  const [subLink, setSubLink] = useState(false);

  const showSubLink = () => setSubLink(!subLink);
  console.log(item);
  return (
    <>
      <Link
        to={item.path}
        className="flex justify-between items-center hover:bg-authBtn"
        onClick={item.subnav && showSubLink}
      >
        <span className="inline-block">
          {item.icon}
          <span className="inline-block">{item.title}</span>
        </span>
        <span className="inline-block">
          {item.subnav && subLink
            ? item.iconOpen
            : item.subnav
              ? item.iconClosed
              : null}
        </span>
      </Link>
      {
        subLink && item.subnav.map((itm, indx) => (
          <Link key={itm.id} className="flex items-center py-1 pl-2 hover:cursor-pointer bg-authBtn" to={itm.path}>
            {itm.icon}
            <span className="inline-block">{itm.title}</span>
          </Link>
        ))
      }
    </>
  );
};

export default SubMenu;
