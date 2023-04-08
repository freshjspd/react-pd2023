import React, { Component } from 'react'
import styles from './Greeting.module.css';

export class Greeting extends Component {
  constructor(props){ super(props); }
  render() {
    const {firstName, lastName} = this.props.user;
    return (
        <div className={styles.card}>
            <h1 className={styles.hello}>Hello, {firstName} {lastName} !!!</h1>
        </div>
    )
  }
}
export default Greeting;
