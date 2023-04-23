import React from 'react'
import styles from './Footer.module.css';
import logo from '../logo.png';

export default function Footer() {
  return (
    <footer>
        <div>
            <a href="#"><img src={logo}/></a>
        </div>
        <p>Copywrihtj 2020 Bella Onojie.com</p>
    </footer>
  )
}
