import React from 'react';
import { NavLink } from 'react-router-dom';
import './../assets/css/Toast.css';

function Toast({ toastImg, toastHeading, toastDetails, toastBtnLink, toastBtnText, onClose }) {
  return (
    <div id="toast-message-cta" className="toast-container w-full fixed top-16 right-2 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-lg toast-animation" role="alert">
      <div className="flex">
        <img className="w-8 h-8 rounded-full" src={toastImg} alt="Toast" />
        <div className="ms-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900">{toastHeading}</span>
          <div className="mb-2 text-sm font-normal">{toastDetails}</div>
          <div className="w-20 text-xs">
            <NavLink to={toastBtnLink} className="bg-teal-700 rounded-lg p-2 text-white">{toastBtnText}</NavLink>
          </div>
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-teal-700 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
          aria-label="Close"
          onClick={onClose} // Call the onClose prop when the button is clicked
        >
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path className="stroke-teal-700" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toast;
