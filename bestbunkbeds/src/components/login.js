import React from 'react';
const axios = require('axios');

class Login extends React.Component {
  constructor(props) {
    super([props]);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(onSubmit) {


    this.setState({
      username: '',
      password: ''
    })

  }

  render() {
    return (

  <div>
    <label><b>Username</b></label>
    <input type='text' placeholder="Enter Username" required/>

    <label><b>Password</b></label>
    <input type='password' placeholder="Enter Password" required/>

    <button type='submit'>Login</button>
  </div>
 )
}

export default Login;

