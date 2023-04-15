import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       userEmail: '',
       userPassw: ''
    }
  }

  setEmail = (event) => {
    this.setState({userEmail: event.target.value});
  }

  setPassw = (event) => {
    this.setState({userPassw: event.target.value});
  }

  handleSubmit = (event) => {
    const {setUser} = this.props;
    console.log(`Отправленные данные: ${this.state.userEmail} and ${this.state.userPassw}`);
    setUser({login: this.state.userEmail, password: this.state.userPassw});
    event.preventDefault();
  }

  render() {
    const {userEmail, userPassw} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={userEmail} onChange={this.setEmail} type="email" placeholder='email'></input>
        <input value={userPassw} onChange={this.setPassw} type="password" placeholder='password'></input>
        <button type="submit">SignIn</button>
      </form>
    )
  }
}