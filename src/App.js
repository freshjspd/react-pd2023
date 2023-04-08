import './App.css';
import Water from './Components/Water'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){ 
    super(props); 
  }
  render() {
    return (
      <>
        <Water temperature={60}/>
        <Water temperature={-5}/>
        <Water temperature={100}/>
      </>
    );
  }
}


