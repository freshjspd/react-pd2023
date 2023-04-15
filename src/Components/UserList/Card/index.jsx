import React, { Component } from 'react'
import styles from './Card.module.css';
export default class Card extends Component {
  constructor(props) {
    super(props);
    console.log('Card: constructor');
  }
  render() {
    console.log('Card: render')
    const {name, surname, isSelected} = this.props.user;
    const {select} = this.props;
    const selectedStyle = isSelected ? styles.selectedCard : null;
    return (
      <li onClick={select} className={selectedStyle}>
        <p>{name} {surname}</p>
      </li>
    )
  }
}
