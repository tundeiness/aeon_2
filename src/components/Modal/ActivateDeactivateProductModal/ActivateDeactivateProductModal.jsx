/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactPortal from '../../ReactPortal/ReactPortal';
import { DangerIcon, CircleCheckIcon } from '../../../data/Dummy';
import {
  getInstitution,
  enableDisableInstitution,
  getInstitutionStatus,
} from '../../../redux/features/institutionSlice';
import { useStateContext } from '../../../contexts/ContextProvider';

const DeactivateModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  const institutionStatus = useSelector(getInstitutionStatus);

  const { getActive, getInstitutionCode } = useStateContext();

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
      dispatch(getInstitution());
    };
  }, [handleClose, institutionStatus, dispatch]);

  const handleEnableDisableInstitution = () => {
    dispatch(enableDisableInstitution(getInstitutionCode));
    // navigate('/institutions');
  };

  // console.log(enableDisableInstitution(getInstitutionCode));

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
                {getActive === 'Active' ? (
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
              {getActive === 'Active' ? (
                <h3 className="text-lg font-medium text-center">
                  Deactivate Institution
                </h3>
              ) : (
                <h3 className="text-lg font-medium text-center">
                  Activate Institution
                </h3>
              )}
              {getActive === 'Active' ? (
                <p className="inline-block mt-2 mb-1 text-slate-500 text-sm font-normal text-center">
                  Are you sure you want to deactivate this institution?
                </p>
              ) : (
                <p className="mt-2 mb-1 text-slate-500 text-sm font-normal text-center">
                  Are you sure you want to activate this institution?
                </p>
              )}
            </div>

            {/* footer */}
            <div className="flex items-center justify-center pl-6 pr-6 pt-2 pb-5 rounded-b">
              <button
                className="text-gray-700 text-base background-transparent font-medium capitalize px-12 py-3  outline outline-gray-300 rounded mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              {getActive === 'Active' ? (
                <button
                  className="bg-red-600 text-white active:bg-red-600 font-medium capitalize text-base px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleEnableDisableInstitution();
                    handleClose();
                  }}
                >
                  Deactivate
                </button>
              ) : (
                <button
                  className="bg-green-600 text-white font-medium capitalize text-base px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleEnableDisableInstitution();
                    handleClose();
                  }}
                >
                  Activate
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </ReactPortal>
  );
};
export default DeactivateModal;
