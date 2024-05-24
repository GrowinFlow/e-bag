import React from 'react';
import './../assets/css/LoadingBar.css';

const LoadingBar = () => {
  return (
    <div className="loading-bar">
      <div className="inner-bar animate-load bg-teal-700">
        <div className="inner-flash animate-flash "></div>
      </div>
    </div>
  );
};

export default LoadingBar;
