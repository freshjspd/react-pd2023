import React, { Component, PureComponent } from 'react';
import DisplayValue from './DisplayValue';

/* PureComponent владеет методом shouldComponentUpdate 
который делает сравнение стейтов и пропсов перед отрисовкой и обновлением
 */
export default class Counter extends PureComponent {
  constructor(props) {
    super(props); 
    this.state = {
       value: 0,
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('props', this.props);
    console.log('next props', nextProps);
    console.log('state',this.state);
    console.log('next state', nextState);
    return this.props.step !== nextProps.step && this.state.value !== nextState.value;
  }

  inc = () => {
    this.setState({value: this.state.value + this.props.step});
  }
  dec = () => {
    this.setState({value: this.state.value - this.props.step});
  }

  render() {
    const {value} = this.state;
    return (
      <>
        <h1>Counter: {value}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    )
  }
}