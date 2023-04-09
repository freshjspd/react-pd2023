import React, { Component } from 'react'
import styles from './User.module.css';

export default class User extends Component {
  handleSelect = () => {
    this.props.select();
  }

  render() {
    const {name, surname, age, isSelected, select} = this.props;
    const selectedStyle = isSelected ? styles.selectedUser : null;    return (
      <article className={selectedStyle} onClick={this.handleSelect}>
        <h2>{name} {surname}</h2>
        <p>age: {age}</p>
      </article>
    )
  }
}
