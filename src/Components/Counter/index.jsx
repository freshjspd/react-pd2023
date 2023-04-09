import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props); 
    console.log('constructor'); 
    this.state = {
       value: 0,
    }
  }
  inc = () => {
    console.log('fun inc');
    this.setState({value: this.state.value + this.props.step});
  }
  dec = () => {
    console.log('fun dec');
    this.setState({value: this.state.value - this.props.step});
  }
  upd = () => {
    console.log('fun upd');
    this.setState({value: 0});
  }

  componentDidMount(){
      console.log('component did mount');
  }

  componentDidUpdate(){
      console.log('component did update');
  }

  componentWillUnmount(){
    console.log('component will unmount');
  }

  render() {
    console.log('render');
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