import './App.css';
import Greeting from './Components/Greeting';
import React, { Component } from 'react'

const currentUser = {
  firstName: 'John',
  lastName: 'Adson',
  email: 'john7@mail.com',
  role: 'moderator'
};

export default class App extends Component {
  constructor(props){ 
    super(props); 
    this.state = {
      user: currentUser,
    };
  }
  render() {
    const {user} = this.state;
    return (
      <Greeting user={user}/>
    );
  }
}


