/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import ReactPortal from '../ReactPortal/ReactPortal';
import './modal.css';

const Modal = ({ children, isOpen, handleClose }) => {
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
      <div className="modal">
        <button type="button" onClick={handleClose} className="close-btn">
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </ReactPortal>
  );
};
export default Modal;
