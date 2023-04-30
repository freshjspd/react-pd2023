import './App.css';
import React, { Component } from 'react';
import DivRender from './Components/FunComponents/DivRender';
import CatMouseTracker from './Components/FunComponents/CatMouseTracker';

export default class App extends Component {
   render() {
    return (
      <>
        <DivRender />
        <CatMouseTracker />
      </>
    );
  }
}


