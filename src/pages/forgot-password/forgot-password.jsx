/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useFormik,
} from 'formik';

import { RiKey2Line } from 'react-icons/ri';
import AeonLogo from '../../static/assets/img/logo-blue.png';
import AuthButton from '../../components/authButton/authButton';
import './forgotpassword.css';

const ForgotPassword = () => {
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
    // onSubmit: (values) => {
    //   alert(`You have loggedin succesfully! Email: ${values.email}`);
    // },
  });

  // console.log(formic.values);
  return (
    <main className="forgot-container flex flex-col justify-between">
      <article className="article-matter flex flex-col items-center justify-center">
        <section className="login-section bg-white flex lg:h-screen md:mx-auto md-mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 px-6  xl:px-20 xl:mx-10 lg:px-4 lg:mx-2">
          <div className="section-content-wrap w-full flex flex-col lg:mt-28">

            <div className="logo-container flex justify-center lg:mb-8 sm:mb-4 lg:mt-0 sm:mt-24 xs:mt-24">
              <img src={AeonLogo} alt="aeon-logo" className="lg:w-64 lg:h-16 sm:w-56 sm:h-14 xs:w-56 xs:h-14" />
            </div>

            <div className="flex flex-row justify-center md:hidden w-full xs:mt-16 xs:mb-4">
              <div className="key-wrapper flex flex-col justify-center items-center w-14 h-14 rounded-full bg-indigo-100 border border-red-500">
                <div className="flex flex-col justify-center items-center bg-indigo-300 w-12 h-12 rounded-full">
                  <div className="flex flex-col justify-center items-center bg-indigo-400 w-9 h-9 rounded-full">
                    <RiKey2Line className="font-bold text-2xl xs:text-3xl text-indigo-600 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-100 xl:px-16 lg:px-16 lg:mb-0 xs:mb-14">
              <h1 className="cta-heading xl:mt-2 lg:mt-2 text-center font-semibold text-gray-900 leading-8 lg:text-3xl xs:font-semibold ">Forgot Password?</h1>
              <h2 className="cta-sub-heading sm:text-sm text-gray500 mt-5 text-center xl:font-normal xl:text-lg lg:font-normal lg:text-sm xs:font-normal xs:leading-6 xs:text-base">
                No worries, we&apos;ll send you reset instructions
              </h2>
              <form className="lg:h-0 sm:h-screen mt-6 px-6" onSubmit={formic.handleSubmit}>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    className={`w-full bg-white mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 ${
                      formic.email && formic.errors.email
                        ? 'border-red-400'
                        : 'border-gray-300'
                    } `}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.email}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    required
                  />
                  {formic.touched.email && formic.errors.email && (
                  <span className="text-red-300 text-xs">
                    {formic.errors.email}
                  </span>
                  )}
                </div>

                {/* <button className="sign-in-button w-full block bg-buttonBlueDeep text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type="submit">Reset Password</button> */}
                <AuthButton buttonType="submit" buttonText="Reset Password" />
                <div className="back-to-login flex flex-row mt-8 justify-center">
                  <Link className="text-gray-500" to="/">
                    <span className="back-arrow inline-block pr-2 text-md">&larr;</span>
                    <span className="inline-block">Back to Log in</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ForgotPassword;
