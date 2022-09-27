/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { CardLayout, Title, CardBodyLayout } from '../ceid/HelperFunctions';

const validate = Yup.object().shape({
  currentPass: Yup.string().required('Password is required'),
  newPass: Yup.string().required('Type your new password'),
  confirmPass: Yup.string().required('Please, confirm your password').oneOf([Yup.ref('newPass')], 'Your passwords do not match.'),
});
const correctPassword = '12';
const notify = () => toast('You have successfully updated your password');
function ChangePassword() {
  const [show, setShow] = useState(true);
  const [current, setCurrent] = useState('password');
  const [newp, setNew] = useState('password');
  const [confirm, setConfirm] = useState('password');
  const [success, setSuccess] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      currentPass: '',
      newPass: '',
      confirmPass: '',
    },
    validationSchema: validate,
    onSubmit: (values) => {
      if (values.currentPass !== correctPassword) {
        return setWrongPassword(true);
      }
      console.log(values);
      setSuccess(true);
      return toast.success('Password reset was successfull');
    },
  });
  return (
    <>
      <div className="w-screen h-full flex justify-items-stretch bg-blue-700">
        <CardBodyLayout>
          <Title title="Change Password" />
          <CardLayout>
            <div className="bg-[#F9F9F9] border-2 border-[#D0D5DD] p-8 rounded-lg">
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="currentPass" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Current Password</label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 right-12 items-center pl-3 w-1/2">

                    {current === 'text' && <AiOutlineEyeInvisible onClick={() => setCurrent('password')} className="cursor-pointer" /> }
                    {current === 'password' && <AiOutlineEye onClick={() => setCurrent('text')} className="cursor-pointer" /> }

                  </div>
                  <input
                    type={current}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="currentPass"
                    value={formik.values.currentPass}
                    className="p-2 border-2 bg-white w-1/2 rounded-lg"
                  />
                  {formik.errors.currentPass && formik.touched.currentPass ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.currentPass}
                    </div>
                  ) : null }
                  {wrongPassword ? <div className="text-red-500 text-sm"> Wrong password, try again </div> : null}
                </div>

                <label htmlFor="newPass" className="block text-sm font-medium text-gray-900 dark:text-gray-300">New Password</label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 right-12 items-center pl-3 w-1/2">

                    {newp === 'text' && <AiOutlineEyeInvisible onClick={() => setNew('password')} className="cursor-pointer" /> }
                    {newp === 'password' && <AiOutlineEye onClick={() => setNew('text')} className="cursor-pointer" /> }

                  </div>
                  <input
                    type={newp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="newPass"
                    value={formik.values.newPass}
                    className="p-2 border-2 bg-white w-1/2 rounded-lg"
                  />
                  {formik.errors.newPass && formik.touched.newPass ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.newPass}
                    </div>
                  ) : null}
                </div>

                <label htmlFor="confirmPass" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 right-12 items-center pl-3 w-1/2">

                    {confirm === 'text' && <AiOutlineEyeInvisible onClick={() => setConfirm('password')} className="cursor-pointer" /> }
                    {confirm === 'password' && <AiOutlineEye onClick={() => setConfirm('text')} className="cursor-pointer" /> }

                  </div>
                  <input
                    type={confirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPass}
                    name="confirmPass"
                    className="p-2 border-2 bg-white w-1/2 rounded-lg"
                  />
                  {formik.errors.confirmPass && formik.touched.confirmPass ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.confirmPass}
                    </div>
                  ) : null}
                </div>

                <button className="py-4 px-6 bg-blue-700 text-white rounded-lg mt-8" type="submit"> Change</button>
              </form>
            </div>
          </CardLayout>
        </CardBodyLayout>
      </div>
      <Toaster />
    </>

  );
}

export default ChangePassword;
