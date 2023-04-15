import React, { Component } from 'react';
import styles from './Stopwatch.module.css';
import {format, add, addSeconds} from 'date-fns';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       count: new Date(0,0,0,0,0,0,0),
       test: new Date()
    }
    this.id = null;
  }

  go = () => {
    const {count} = this.state;
    // напрямую состояние изменять нельзя! (состояние иммутабельно)
    //const countNew = new Date(count.valueOf());
    //countNew.setSeconds(count.getSeconds() + 1);
    const countNew = addSeconds(count, 1);
    this.setState({count: countNew});
    //2
    //addSome({seconds: 1})
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

  addSome = options => {
    //const copyTest = this.state.test;
    //const newTest = add(copyTest, options);
    //this.setState({test: newTest});
    const newTest = add(this.state.test, options);
    this.setState({test: newTest});
  }

  render() {
    const {count} = this.state;
    return (
      <>
        <div className={styles.container}>
          <p>{count.toLocaleTimeString('en-GB')}</p>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </div>
        <p>{ format(this.state.test, 'do MMMM yyyy') }</p>
        <p>{ format(this.state.test, 'd MMM yyyy HH:mm') }</p>
        <button onClick={()=>this.addSome({days:1})}>add 1 day</button>
        <button onClick={()=>this.addSome({days:5})}>add 5 days</button>
      </>
    )
  }
}
