import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {name, surname} = this.props.user;
    return (
      <li>
        <p>{name} {surname}</p>
      </li>
    )
  }
}
