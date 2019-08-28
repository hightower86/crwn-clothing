import React, { Component } from 'react';

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
          <input
            onChange={this.handleChange}
            name='email'
            type='email'
            value={this.state.email}
            placeholder='type your email'
            require='true'
          />
          <label htmlFor=''>Email</label>
          <input
            onChange={this.handleChange}
            name='password'
            type='password'
            placeholder='type your password'
            value={this.state.password}
            require='true'
          />
          <label htmlFor=''>Password</label>

          <input type='submit' value='sign in' />
        </form>
      </div>
    );
  }
}
