import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  //console.log(children, ...otherProps);
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-button' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
