import React, { Component } from 'react'

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
  upd = () => {
    this.setState({value: 0});
  }
  render() {
    const {value} = this.state;
    return (
      <>
        <h1>Counter: {value}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={value >0 ? this.dec : null}>-</button>
        <button onClick={this.upd}>0</button>
      </>
    )
  }
}