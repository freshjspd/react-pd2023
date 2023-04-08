import React, { Component } from 'react'

export class Greeting extends Component {
  constructor(props){ super(props); }
  render() {
    const {firstName, lastName, email} = this.props.user;
    const {isOnline} = this.props;
    return (
        <>
            <h1>Hello, {firstName} {lastName} !!!</h1>
            <p>my email: {email}</p>
            <p>online: {isOnline ? "yes" : "no"}</p>
        </>
    )
  }
}
export default Greeting;
/*
import React from 'react'
function Greeting() {
  return (
    <>
      <h1>My first app</h1>
      <p>Hello, React!!!</p>
      <p>08-04-2023</p>
    </>
  );
}
export default Greeting;
*/