import React, { Component } from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, createUserProfileDocument } from '../../utils/firebase/firebase';

import './SignUp.scss';

export default class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = () => {
    console.log('handle submit');
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <div className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name={displayName}
            value={displayName}
            onChange={this.handleSubmit}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name={email}
            value={email}
            onChange={this.handleSubmit}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name={password}
            value={password}
            onChange={this.handleSubmit}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name={confirmPassword}
            value={confirmPassword}
            onChange={this.handleSubmit}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Sign UP</CustomButton>
        </div>
      </div>
    );
  }
}
