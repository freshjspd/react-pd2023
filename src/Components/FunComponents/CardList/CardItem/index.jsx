import React from 'react'
import styles from './CardItem.module.css';
import Icon from '@mdi/react';
import {mdiAccountOutline, mdiAccountCheck} from '@mdi/js';

export default function CardItem(props) {
  const {user:{fullName, isSelected}, select} = props;

   const selectedStyle = isSelected ? styles.selectedCard : null;
   const userIcon = isSelected ?  mdiAccountCheck : mdiAccountOutline;

   return (
    <li onClick={select} className={selectedStyle}>
        <Icon path={userIcon} size={1.5} color="blue"/>
        <span>{fullName}</span>
    </li>
);
}

