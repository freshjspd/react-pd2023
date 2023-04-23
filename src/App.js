import './App.css';
import React, { Component } from 'react';
import Slider from './Components/Slider';

const db = [
  '',
  '',
  ''
]; 

export default class App extends Component {
   render() {
    return (
      <>
        <Slider images={db}/>
      </>
    );
  }
}


