

import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navlink = ({ to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest}) => {
  return (
  let Location = useLocation()
  const isActive = location.pathname === to;

  let allClassNames = className + {isActive ? `${activeClassName}`: `${inactiveClassName}`};

  <Link className={allClassNames} to={to} {...rest} />

  )
}

export default NavLink;
