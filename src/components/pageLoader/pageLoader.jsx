/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageLoader = ({ className = '' }) => {
  const test = 0;
  return (
    <div className={classnames([className], 'flex flex-row items-center justify-center w-screen h-screen')}>
      <h1 className="text-lg leading-5">Loading...</h1>
    </div>
  );
};

PageLoader.propTypes = {
  className: PropTypes.string.isRequired,
};

export default PageLoader;
