import './App.css';
import React, { Component } from 'react';
import Counter from './Components/Counter';

export default class App extends Component {
  constructor(props){ 
    super(props); 
  }
  render() {
    return (
      <>
        <Counter step={5} />
        <Counter step={100} />
      </>
    );
  }
}


