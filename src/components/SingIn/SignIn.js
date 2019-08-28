import React, { Component } from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import './SignIn.scss';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
          <FormInput
            handleChange={this.handleChange}
            name='email'
            type='email'
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name='password'
            type='password'
            value={this.state.password}
            label='Password'
            required
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
