import './App.css';
import React, { Component } from 'react'
import Greeting from './Components/Greeting';

const users = [
{
  firstName: 'Tom',
  lastName: 'Tomson'
},
{
  firstName: 'Kate',
  lastName: 'Tomson'
},
];


export default class App extends Component {
  constructor(props){ 
    super(props); 
  }
  render() {
    return (
      <>
        <Greeting user={users[0]} isHello={false}/>
        <Greeting user={users[1]} isHello={true}/>
      </>
    );
  }
}


