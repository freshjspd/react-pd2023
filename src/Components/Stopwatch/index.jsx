import React, { Component } from 'react'

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       count: new Date(0,0,0,0,0,0,0)
    }
    this.id = null;
  }

  go = () => {
    const {count} = this.state;
    // напрямую состояние изменять нельзя! (состояние иммутабельно)
    const countNew = new Date(count.valueOf());
    countNew.setSeconds(count.getSeconds() + 1);
    this.setState({count: countNew});
  }

  start = () => {
    if(!this.id) this.id = setInterval(this.go, 1000);
  }

  stop = () => {
    clearInterval(this.id);
    this.id = null;
  }

  reset = () => {
    this.setState({count: new Date(0,0,0,0,0,0,0)});
  }

  render() {
    const {count} = this.state;
    return (
      <>
        <p>{count.toLocaleTimeString('en-GB')}</p>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </>
    )
  }
}
