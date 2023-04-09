import React, { Component } from 'react';
import DisplayValue from './DisplayValue';

export default class Counter extends Component {
  constructor(props) {
    super(props); 
    this.state = {
       value: 0,
    }
  }
  inc = () => {
    this.setState({value: this.state.value + this.props.step});
  }
  dec = () => {
    this.setState({value: this.state.value - this.props.step});
  }

  valueHandler = (x) => {
    this.setState({value: x});
  }

  render() {
    const {value} = this.state;
    return (
      <>
        <h1>Counter: {value}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <DisplayValue value={value} valueHandler={this.valueHandler}/>
      </>
    )
  }
}