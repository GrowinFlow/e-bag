import React from 'react';

function ConfirmToast({ conHeading, conDetails, fBtn, sBtn, onConfirm, onCancel }) {
  return (
    <div
      id="toast-interactive"
      className="w-full fixed top-16 right-2 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-lg"
      role="alert"
    >
      <div className="flex">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
          <i className="fa-solid fa-circle-radiation fa-shake"></i>
        </div>
        <div className="ms-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900">{conHeading}</span>
          <div className="mb-2 text-sm font-normal">{conDetails}</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <button
                onClick={onConfirm}
                className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                {fBtn}
              </button>
            </div>
            <div>
              <button
                onClick={onCancel}
                className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
              >
                {sBtn}
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-red-600 hover:text-red-700 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-100 inline-flex h-8 w-8"
          data-dismiss-target="#toast-interactive"
          aria-label="Close"
          onClick={onCancel}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ConfirmToast;
