import React from 'react';
import SignIn from '../../SingIn/';
import SignUp from '../../SignUp';
import './SignInSignUp.scss';

const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      {/* <h1>Sign In and Sign Up Page</h1> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
