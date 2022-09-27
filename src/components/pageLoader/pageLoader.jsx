/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

const PageLoader = () => {
  const test = 0;
  return (
    <div className="flex flex-row items-center justify-center w-screen h-96 relative">
      <h1 className="text-lg leading-5 absolute left-1/3 top-3/4">Loading...</h1>
    </div>
  );
};

// PageLoader.propTypes = {
//   className: PropTypes.string.isRequired,
// };

export default PageLoader;
