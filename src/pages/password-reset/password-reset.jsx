/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import AeonLogo from '../../static/assets/img/logo-blue.png';

const PasswordReset = () => {
  const test = 0;
  return (
    <main className="check-container flex flex-col justify-between">
      <article className="check-article-matter flex flex-col items-center justify-center">
        <section className="check-section bg-white flex lg:h-screen md:mx-auto md-mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 px-6  xl:px-20 xl:mx-10 lg:px-4 lg:mx-2">
          <div className="section-content-wrap w-full flex flex-col xl:mt-16 lg:mt-20">

            <div className="logo-container flex justify-center xl:mb-0 lg:mb-8 sm:mb-4 lg:mt-0 md:mt-20 sm:mt-20 xs:mt-20">
              <img src={AeonLogo} alt="aeon-logo" className="xl:w-56 xl:h-14 lg:w-56 lg:h-14 sm:w-56 sm:h-14 xs:w-56 xs:h-14" />
            </div>

            <div className="flex flex-row justify-center w-full xl:mt-16 lg:mt-10 md:mt-10 sm:mt-12 xs:mt-24 xs:mb-4">
              <div className="key-wrapper flex flex-col justify-center items-center w-14 h-14 rounded-full bg-indigo-100">
                <div className="flex flex-col justify-center items-center bg-green-100 w-12 h-12 rounded-full">
                  <div className="flex flex-col justify-center items-center bg-green-200 w-9 h-9 rounded-full">
                    <FiCheckCircle className="font-bold text-2xl xs:text-3xl text-green-400 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-100 xl:px-16 lg:px-16 lg:mb-0 xs:mb-14">
              <h1 className="cta-heading xl:mt-2 lg:mt-2 text-center text-gray-900 leading-8 xl:text-3xl lg:text-3xl xl:font-semibold lg:font-semibold sm:font-semibold xs:font-semibold md:font-semibold md:text-2xl sm:text-2xl xs:text-2xl">Password reset</h1>
              <h2 className="cta-sub-heading text-gray500 mt-5 text-center xl:font-normal xl:text-lg lg:font-normal lg:text-base xs:font-normal xs:leading-6 xs:text-base xl:px-6 lg:px-4 md:px-1 sm:px-3 xs:px-3 md:font-normal md:text-base sm:font-normal sm:text-base">
                Your password has been successfully reset. Click below to log in magically.
              </h2>
              <form className="lg:h-0 sm:h-screen mt-6 xl:px-6 lg:px-6 sm:px-4">

                <button className="sign-in-button w-full block bg-buttonBlueDeep text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type="submit">Continue</button>

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

export default PasswordReset;
