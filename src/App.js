import './App.css';
import React, { Component } from 'react';
import CounterFun from "./Components/FunComponents/CounterFun";

const currentUser = {firstName: 'John', lastName: 'Adson'};
export default class App extends Component {
   render() {
    return (
      <>
        <CounterFun initialValue= {100} step={10}/>
      </>
    );
  }
}


