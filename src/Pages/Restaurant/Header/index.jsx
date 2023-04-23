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
            <ul>
                <li><a href="#">{info[0]}</a></li>
                <li><a href="#">{info[1]}</a></li>
                <li><a href="#">{info[2]}</a></li>
                <li><a href="#">{info[3]}</a></li>
            </ul>
        </nav>        
    </header>
  )
}
