import React from 'react';

import './CustomButton.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  //console.log(children, ...otherProps);
  return (
    <button
      className={`custom-button ${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-button' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
