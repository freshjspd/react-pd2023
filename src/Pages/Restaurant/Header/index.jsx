import React from 'react'
import logo from '../logo.png';
import styles from './Header.module.css';

export default function Header(props) {
  const {info} = props;
  return (
    <header className={styles.container}>
        <div>
            <a href="#"> <img src={logo}/></a>
        </div>
        <nav className={styles.menu}>
            <ul>{info.map(i => <li><a href="#">{i}</a></li>)}</ul>
        </nav>        
    </header>
  )
}
