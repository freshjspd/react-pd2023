import './App.css';
import React, { Component } from 'react';
import ClickComponent from './Components/FunComponents/ClickComponent';
import Calc from './Components/FunComponents/Calc';

export default class App extends Component {
   render() {
    return (
      <>
        <ClickComponent/>
        <Calc />
      </>
    );
  }
}


