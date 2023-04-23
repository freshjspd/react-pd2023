import React from 'react';
import styles from './BoardApp.module.css';
import classNames from 'classnames';

export default function BoardApp(props) {
    const {info, btnInfoText, bcImg} = props;
    const backSection = {backgroundImage: `url(${bcImg})`};
    return(
    <section className={styles.app} style={backSection}>
            <div className={styles.container}>
                <p className={styles.appText}>{info[0]}</p>
                <h1 className={styles.appTitle}>{info[1]}</h1>
                <p className={styles.appAbout}>{info[2]}</p>
                <div className={styles.buttonContainer}>
                    <div className={classNames(styles.btn, styles.colorBtn)}>
                        <p>{btnInfoText[0]}</p>
                    </div>
                    <div className={classNames(styles.btn, styles.transparentBtn)}>
                        <p>{btnInfoText[1]}</p>
                    </div>
                </div>
            </div>
        </section>
)
}