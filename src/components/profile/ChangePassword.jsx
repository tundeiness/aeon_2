/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useFormik } from 'formik';
import { CardLayout, Title, CardBodyLayout } from '../ceid/HelperFunctions';

function ChangePassword() {
  const [show, setShow] = useState(true);
  const [current, setCurrent] = useState('password');
  const [newp, setNew] = useState('password');
  const [confirm, setConfirm] = useState('password');

  const formik = useFormik({
    initialValues: {
      current: '',
      new: '',
      confirm: '',
    },
  });
  return (
    <>
      <div className="w-screen h-full flex justify-items-stretch bg-blue-700">
        <CardBodyLayout>
          <Title title="Change Password" />
          <CardLayout>
            <div className="bg-[#F9F9F9] border-2 border-[#D0D5DD] p-8 rounded-lg">
              <form>
                <label htmlFor="current" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Current Password</label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 right-12 items-center pl-3 w-1/2">

                    {current === 'text' && <AiOutlineEyeInvisible onClick={() => setCurrent('password')} className="cursor-pointer" /> }
                    {current === 'password' && <AiOutlineEye onClick={() => setCurrent('text')} className="cursor-pointer" /> }

                  </div>
                  <input type={current} id="input-group-1" className="p-2 border-2 bg-white w-1/2 rounded-lg" />
                </div>

                <label htmlFor="current" className="block text-sm font-medium text-gray-900 dark:text-gray-300">New Password</label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 right-12 items-center pl-3 w-1/2">

                    {newp === 'text' && <AiOutlineEyeInvisible onClick={() => setNew('password')} className="cursor-pointer" /> }
                    {newp === 'password' && <AiOutlineEye onClick={() => setNew('text')} className="cursor-pointer" /> }

                  </div>
                  <input type={newp} id="input-group-1" className="p-2 border-2 bg-white w-1/2 rounded-lg" />
                </div>

                <label htmlFor="current" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 right-12 items-center pl-3 w-1/2">

                    {confirm === 'text' && <AiOutlineEyeInvisible onClick={() => setConfirm('password')} className="cursor-pointer" /> }
                    {confirm === 'password' && <AiOutlineEye onClick={() => setConfirm('text')} className="cursor-pointer" /> }

                  </div>
                  <input type={confirm} id="input-group-1" className="p-2 border-2 bg-white w-1/2 rounded-lg" />
                </div>

                <button className="py-4 px-6 bg-blue-700 text-white rounded-lg mt-8" type="submit"> Search</button>
              </form>
            </div>
          </CardLayout>
        </CardBodyLayout>
      </div>
    </>

  );
}

export default ChangePassword;
