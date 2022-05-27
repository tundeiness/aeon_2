/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import './inputemail.css';
// import { Link, Navigate, useNavigate } from 'react-router-dom';

const InputEmail = ({
  type = 'text', label = '', value, placeholder = '', className = '', required = true, autocomplete = 'off',
}) => {
  const test = 0;
  const validate = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = 'Cannot be blank';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
    ) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const formic = useFormik({
    initialValues: {
      email: '',
    },
    validate,
  });

  return (
    <div>
      {label && (<label className="block text-gray-700" htmlFor={type}>{label}</label>)}

      <input
        className={`w-full bg-white mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 ${
          formic.email && formic.errors.email
            ? 'border-red-400'
            : 'border-gray-300'
        } `}
        onChange={formic.handleChange}
        onBlur={formic.handleBlur}
        value={formic.values.email}
        id={type}
        name={type}
        type={type}
        placeholder="Enter your email"
        autoComplete={autocomplete}
        required={required}
      />
      {formic.touched.email && formic.errors.email && (
      <span className="text-red-300 text-xs">
        {formic.errors.email}
      </span>
      )}
    </div>

  );
};

InputEmail.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  autocomplete: PropTypes.bool.isRequired,
};

export default InputEmail;
