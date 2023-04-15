import React, { Component } from 'react'
import Login from '../../Components/forms/Login';

export default class SignIn extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       user: {
        login: '',
        password: ''
       }
    }
  }

  setUser = (data) => {
     this.setState({user: {login: data.login, password: data.password} });
  }

  render() {
    const {login, password} = this.state.user;
    return (
      <>
        <h1>Login page</h1>
        <Login setUser={this.setUser}/>
        <p>Current user:</p>
        <p>{login} {password}</p>
      </>
    )
  }
}
