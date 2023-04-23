import React from 'react'
import styles from './CardItem.module.css';

export default function CardItem(props) {
  const {user:{fullName, isSelected}, select} = props;

   const selectedStyle = isSelected ? styles.selectedCard : null;

   return (
    <li onClick={select} className={selectedStyle}>
        <p>User: {fullName}</p>
    </li>
);
}

