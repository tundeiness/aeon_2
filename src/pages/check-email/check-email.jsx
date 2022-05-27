/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useFormik,
} from 'formik';
import { HiOutlineMail } from 'react-icons/hi';
import AeonLogo from '../../static/assets/img/logo-blue.png';
import AuthButton from '../../components/authButton/authButton';

const CheckEmail = () => {
  const validate = (value) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
        <section className="check-section bg-white flex lg:h-screen md:mx-auto md-mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 px-6  xl:px-20 xl:mx-10 lg:px-4 lg:mx-2">
          <div className="section-content-wrap w-full flex flex-col lg:mt-28">

            <div className="logo-container flex justify-center xl:mb-0 lg:mb-8 sm:mb-4 lg:mt-0 sm:mt-24 xs:mt-24">
              <img src={AeonLogo} alt="aeon-logo" className="lg:w-64 lg:h-16 sm:w-56 sm:h-14 xs:w-56 xs:h-14" />
            </div>

            <div className="flex flex-row justify-center w-full xl:mt-14 lg:mt-10 xs:mt-16 xs:mb-4">
              <div className="key-wrapper flex flex-col justify-center items-center w-14 h-14 rounded-full bg-indigo-100">
                <div className="flex flex-col justify-center items-center bg-indigo-300 w-12 h-12 rounded-full">
                  <div className="flex flex-col justify-center items-center bg-indigo-400 w-9 h-9 rounded-full">
                    <HiOutlineMail className="font-bold text-2xl xs:text-3xl text-indigo-600 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-100 xl:px-16 lg:px-16 lg:mb-0 xs:mb-14">
              <h1 className="cta-heading xl:mt-2 lg:mt-2 text-center font-semibold text-gray-900 leading-8 lg:text-3xl xs:font-semibold ">Check your email</h1>
              <h2 className="cta-sub-heading sm:text-sm text-gray500 mt-5 text-center xl:font-normal xl:text-lg lg:font-normal lg:text-sm xs:font-normal xs:leading-6 xs:text-base">
                We sent a password reset to link to paul@credequity.com
              </h2>
              <form className="lg:h-0 sm:h-screen mt-6 xl:px-6 lg:px-6 sm:px-4" onSubmit={formic.handleSubmit}>

                {/* <button className="sign-in-button w-full block bg-buttonBlueDeep text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type="submit">Open email app</button> */}
                <AuthButton buttonType="submit" buttonText="Open email app" />
                <div className="flex flex-row justify-center xl:mt-8 lg:mt-8 md:mt-6 sm:mt-6 xs:mt-6">
                  <p className="text-base text-gray-500 pr-2">
                    Didn&apos;t recieve the email?
                    {' '}
                  </p>
                  <Link className="inline-block text-link" to="/forgot-password">click to resend</Link>

                </div>
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

export default CheckEmail;
