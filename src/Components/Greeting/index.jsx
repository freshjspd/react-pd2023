import React, { Component } from 'react'
import styles from './Greeting.module.css';

export class Greeting extends Component {
  constructor(props){ super(props); }
  render() {
    const {firstName, lastName, email} = this.props.user;
    const {isOnline} = this.props;
    return (
        <div className={styles.card}>
            <h1 className={styles.hello}>Hello, {firstName} {lastName} !!!</h1>
            <p>my email: {email}</p>
            <p className={styles.net}>online: {isOnline ? "yes" : "no"}</p>
        </div>
    )
  }
}
export default Greeting;
