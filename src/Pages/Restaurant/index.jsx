import React from 'react';
import BoardApp from './BoardApp';
import Mobile from './Mobile';
import Footer from './Footer';

import back1 from './BoardApp/imgs/back1.png';
import back2 from './BoardApp/imgs/back2.png';
import mob1 from './Mobile/imgs/mob1.png';
import mob2 from './Mobile/imgs/mob2.png';

import styles from './Restaurant.module.css';
import Header from './Header';

const restInfo = [
    'Restaurant app', 
    'Why stay hungry when you can order from Eats', 
    'Order in exchange for hunger'
];
const restBtn = ['Delivery','Menu'];

const mobInfo1 = [
'Create an account', 
'Create/login to an existing account to get started', 
'An account is created with your email and a desired password'];
const mobInfo2 = [
'Explore varieties', 
'Shop for your favorites meal as e dey hot.', 
'Shop for your favorite meals or drinks and enjoy while doing it.'];

const orderInfo = [
    '',
    'Order now', 
    'Available on your favorite store. Start your premium experience now', 
];
const orderBtn = ['Paystore', 'Appstore'];

const menuInfo = ['Home', 'Product', 'Faq', 'Contact'];

export default function Restaurant(props) {
    return(
    <>
        <Header info={menuInfo}/>
        <BoardApp info={restInfo} btnInfoText={restBtn} bcImg={back1}/>
        <section className={styles.container}>
            <p>How the app works</p>
            <Mobile imgMobile={mob1} info={mobInfo1} isImgFirst={true} />
            <Mobile imgMobile={mob2} info={mobInfo2} isImgFirst={false} />
        </section>
        <BoardApp info={orderInfo} btnInfoText={orderBtn} bcImg={back2}/>
        <Footer />
    </>);
}


