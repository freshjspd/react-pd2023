import React, { Component } from 'react';
import styles from './Matrix.module.css';

export default class Matrix extends Component {
  constructor(props) {
    super(props);  
    this.state = { count: new Date(0,0,0,0,0,10) }
    this.id = null;
  }

  go = () => {
    const {count} = this.state;
    const countNew = new Date(count.valueOf());
    if(count.getSeconds() !== 0) {
        countNew.setSeconds(count.getSeconds() - 1);
        this.setState({count: countNew});
    } else{
    clearInterval(this.id);
    this.id = null;}
  }

  start = () => { if(!this.id) this.id = setInterval(this.go, 1000); }

  render() {
    const {count} = this.state;
    return (
      <div className={styles.clock}>
        <p className={styles.digits}>{count.toLocaleTimeString('en-GB')}</p>
        <button onClick={this.start}>Go!</button>
      </div>
    )
  }
}
