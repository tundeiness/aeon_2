/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useFormik,
} from 'formik';
import { RiKey2Line } from 'react-icons/ri';
import AeonLogo from '../../static/assets/img/logo-blue.png';

const NewPassword = () => {
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
    <main className="check-container flex flex-col justify-between">
      <article className="check-article-matter flex flex-col items-center justify-center">
        <section className="check-section bg-white flex lg:h-screen md:mx-auto md-mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 px-6  xl:px-20 xl:mx-10 lg:px-4 lg:mx-2 ">
          <div className="section-content-wrap w-full flex flex-col xl:mt-16 lg:mt-20">

            <div className="logo-container flex justify-center xl:mb-0 lg:mb-8 sm:mb-4 lg:mt-0 md:mt-10 sm:mt-10 xs:mt-10">
              <img src={AeonLogo} alt="aeon-logo" className="lg:w-64 lg:h-16 sm:w-56 sm:h-14 xs:w-56 xs:h-14" />
            </div>

            <div className="flex flex-row justify-center w-full xl:mt-10 lg:mt-8 md:mt-10 xs:mt-24 xs:mb-4">
              <div className="key-wrapper flex flex-col justify-center items-center w-14 h-14 rounded-full bg-indigo-100">
                <div className="flex flex-col justify-center items-center bg-indigo-300 w-12 h-12 rounded-full">
                  <div className="flex flex-col justify-center items-center bg-indigo-400 w-9 h-9 rounded-full">
                    <RiKey2Line className="font-bold text-2xl xs:text-3xl text-indigo-600 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-100 xl:px-16 lg:px-16 lg:mb-0 xs:mb-14">
              <h1 className="cta-heading xl:mt-2 lg:mt-2 text-center font-semibold text-gray-900 leading-8 lg:text-3xl xs:font-semibold md:font-semibold md:text-2xl sm:text-2xl xs:text-2xl">Set new password</h1>
              <h2 className="cta-sub-heading sm:text-sm text-gray500 mt-5 text-center xl:font-normal xl:text-lg lg:font-normal lg:text-sm xs:font-normal xs:leading-6 xs:text-base xl:px-4 lg:px-4 md:px-1 sm:px-3 xs:px-3 md:font-normal">
                Your new password must be different to previously used passwords.
              </h2>
              <form className="lg:h-0 sm:h-screen mt-6 xl:px-6 lg:px-6 sm:px-4" onSubmit={formic.handleSubmit}>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    className={`w-full bg-white mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 ${
                      formic.password && formic.errors.password
                        ? 'border-red-300'
                        : 'border-gray-300'
                    }`}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.password}
                    id="password"
                    name="password"
                    type="password"
                    minLength={8}
                    placeholder="Enter password"
                    required
                  />
                  {formic.touched.password && formic.errors.password && (
                  <span className="text-red-400">{formic.errors.password}</span>
                  )}
                  <p className="xl:mt-1 lg:mt-2 md:mt-3 text-base font-normal text-gray-500">Must be at least 8 characters</p>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Confirm password</label>
                  <input
                    className={`w-full  mt-2 border border-gray-300 focus:border-blue-500 focus:bg-white  focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 ${
                      formic.password && formic.errors.password
                        ? 'border-red-300'
                        : 'border-gray-300'
                    }`}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.password}
                    id="password"
                    name="password"
                    type="password"
                    minLength={8}
                    placeholder="Enter password"
                    required
                  />
                  {formic.touched.password && formic.errors.password && (
                  <span className="text-red-400">{formic.errors.password}</span>
                  )}
                </div>
                <button className="sign-in-button w-full block bg-buttonBlueDeep text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type="submit">Reset password</button>
                <div className="back-to-login flex flex-row mt-6 justify-center">
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

export default NewPassword;
