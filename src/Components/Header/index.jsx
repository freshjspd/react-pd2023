import React from 'react';
import { LogoContext } from '../../contexts';
import styles from './Header.module.css';

export default function Header() {
  return (
    <LogoContext.Consumer>
        {logo => {
            return(
                <div className={styles.container}>
                    <div className={styles.img_container}>
                        <img src={logo.src} alt="logo"/>
                    </div>
                    <h1>{logo.name}</h1>
                    <p>{logo.greeting}</p>
                </div>
            )
        }}
    </LogoContext.Consumer>
  )
}
