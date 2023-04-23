import React from 'react';
import styles from './Mobile.module.css';
import classNames from 'classnames';

export default function Mobile(props) {
    const {imgMobile, info, isImgFirst} = props;
    const orderInfo = isImgFirst ? null : styles.reverseImg;
    //const orderInfo = isImgFirst ? null : "flexDirection: row-reverse";
    return(
        <article className={classNames(styles.mobi, orderInfo)}>
                <div>
                    <img src={imgMobile} alt="mobile" />
                </div>
                <div className={styles.info}>
                    <h3 className={styles.mobiColor}>{info[0]}</h3>
                    <h2 className={styles.mobiTitle}>{info[1]}</h2>
                    <h4 className={styles.mobiText}>{info[2]}</h4>
                </div>
        </article>        
)}