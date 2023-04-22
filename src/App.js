import './App.css';
import React, { Component } from 'react';
import TimerFun from "./Components/FunComponents/TimerFun";

const currentUser = {firstName: 'John', lastName: 'Adson'};
export default class App extends Component {
   render() {
    return (
      <>
        <TimerFun />
      </>
    );
  }
}


