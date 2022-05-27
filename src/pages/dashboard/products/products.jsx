/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Link, Outlet } from 'react-router-dom';
import './products.css';

const Products = () => {
  const test = 0;
  return (
    <>
      <div>This is products</div>
      <Outlet />
    </>
  );
};

export default Products;
