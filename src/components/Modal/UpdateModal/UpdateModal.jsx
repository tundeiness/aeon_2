/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import ReactPortal from '../../ReactPortal/ReactPortal';
import { DangerIcon, WarningIcon } from '../../../data/Dummy';

const UpdateModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

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
                <span className="flex justify-center items-center w-9 h-9 text-3xl text-warning rounded-3xl bg-red-200">
                  {WarningIcon.symbol}
                </span>
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <h3 className="text-lg font-medium text-center">
                Deactivate Institution
              </h3>
              <p className="mt-2 mb-1 text-slate-500 text-sm font-normal text-center">
                Are you sure you want to deactivate this institution? This
                action cannot be undone.
              </p>
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
              <button
                className="bg-red-600 text-white active:bg-red-600 font-medium capitalize text-base px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </ReactPortal>
  );
};
export default UpdateModal;
