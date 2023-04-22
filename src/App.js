import './App.css';
import React, { Component } from 'react';
import Hello from "./Components/FunComponents/Hello";

const currentUser = {firstName: 'John', lastName: 'Adson'};
export default class App extends Component {
   render() {
    return (
      <>
        <Hello user={currentUser} isHello={true}/>
        <Hello user={currentUser} isHello={false}/>
      </>
    );
  }
}


