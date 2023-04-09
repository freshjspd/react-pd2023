import React, { Component } from 'react';

export default class ViewPortParams extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       x: window.innerWidth,
       y: window.innerHeight,
    };
  }

  resize = () => {
    this.setState({x: window.innerWidth, y: window.innerHeight});
  }

  componentDidMount(){
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
  }

  render() {
    return (
      <>
        <h1>width {this.state.x} heigth {this.state.y}</h1>
      </>
    )
  }
}
