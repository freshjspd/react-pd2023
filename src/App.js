import './App.css';
import React, { Component } from 'react';
import Counter from './Components/Counter';

export default class App extends Component {
  constructor(props){ 
    super(props); 
    this.state = {
      isVisible: false,
    };
  }

  handleCounter = () => {
    const {isVisible} = this.state;
    this.setState({isVisible: !isVisible});
  };

  render() {
    const {isVisible} = this.state;
    return (
      <>
        <button onClick={this.handleCounter}>
          {isVisible ? 'Unmount' : 'Mount'}
        </button>
        {isVisible && <Counter step={5}/>}
      </>
    );
  }
}


