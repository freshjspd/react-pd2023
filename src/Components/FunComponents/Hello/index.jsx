import React from 'react'

export default function Hello(props) {
  const {firstName, lastName} = props.user;
  return (
    <div>
            <h1>Hello, {firstName} {lastName} !!!</h1>
    </div>
  )
}


/*
render() {
    const {firstName, lastName} = this.props.user;
    this.changeMode();
    return (
        <div className={styles[this.theme]}>
            <h1>{this.state.msg}, {firstName} {lastName} !!!</h1>
        </div>
    )
  }
*/