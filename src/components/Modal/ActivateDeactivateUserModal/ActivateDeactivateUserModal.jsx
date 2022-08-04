/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactPortal from '../../ReactPortal/ReactPortal';
import { DangerIcon, CircleCheckIcon } from '../../../data/Dummy';
import {
  getAllUsers,
  enableDisableUser,
} from '../../../redux/features/userSlice';
import { useStateContext } from '../../../contexts/ContextProvider';

const ActivateDeactivateUserModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    getProductCode, getActiveProduct, userId, setUserId, activeUser,
  } = useStateContext();

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
      dispatch(getAllUsers());
      navigate('/users');
    };
  }, [handleClose, dispatch, navigate]);

  const handleEnableDisableUser = () => {
    const data = { userId };
    dispatch(enableDisableUser(data));
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex justify-center pl-5 pr-5 pt-3 pb-1 rounded-t">
              <button
                type="button"
                className="flex justify-center items-center btnWrap w-12 h-12 rounded-3xl bg-red-50"
              >
                {activeUser === 'Active' ? (
                  <span className="flex justify-center items-center w-9 h-9 text-3xl text-red-700 rounded-3xl bg-red-200">
                    {DangerIcon.symbol}
                  </span>
                ) : (
                  <span className="flex justify-center items-center w-9 h-9 text-3xl text-green-700 rounded-3xl bg-red-200">
                    {CircleCheckIcon.symbol}
                  </span>
                )}
              </button>
            </div>
            {/* body */}
            <div className="relative p-4 flex-auto">
              {activeUser === 'Active' ? (
                <h3 className="text-lg font-medium text-center">
                  Deactivate User
                </h3>
              ) : (
                <h3 className="text-lg font-medium text-center">
                  Activate User
                </h3>
              )}
              {activeUser === 'Active' ? (
                <p className="inline-block mt-2 mb-1 text-slate-500 text-sm font-normal text-center">
                  Are you sure you want to deactivate this user?
                </p>
              ) : (
                <p className="mt-2 mb-1 text-slate-500 text-sm font-normal text-center">
                  Are you sure you want to activate this user?
                </p>
              )}
            </div>

            {/* footer */}
            <div className="flex items-center justify-center pl-6 pr-6 pt-2 pb-5 rounded-b">
              <button
                className="text-gray-700 text-sm background-transparent font-medium capitalize px-12 py-2.5  outline outline-gray-300 rounded mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleClose()}
              >
                NO
              </button>
              {activeUser === 'Active' ? (
                <button
                  className="bg-red-600 text-white active:bg-red-600 font-medium capitalize text-sm px-12 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleEnableDisableUser();
                    handleClose();
                  }}
                >
                  YES
                </button>
              ) : (
                <button
                  className="bg-green-600 text-white font-medium text-sm  px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleEnableDisableUser();
                    handleClose();
                  }}
                >
                  Yes, go ahead
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black " />
    </ReactPortal>
  );
};
export default ActivateDeactivateUserModal;
