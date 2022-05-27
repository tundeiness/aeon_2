/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({
  buttonType, buttonText, loading,
}) => {
  const test = 0;
  return (
    <button className="sign-in-button w-full block bg-buttonBlueDeep text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type={buttonType}>
      {buttonText}
    </button>
  );
};

AuthButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AuthButton;
