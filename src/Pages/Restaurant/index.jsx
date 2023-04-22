import React from 'react';
import RestApp from './RestApp';
import back1 from './RestApp/imgs/back1.png';
import back2 from './RestApp/imgs/back2.png';



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



export default function Restaurant(props) {
    return(
    <>
        <RestApp info={restInfo} btnInfoText={restBtn} bcImg={back1}/>
        <RestApp info={orderInfo} btnInfoText={orderBtn} bcImg={back2}/>
    </>);
}


/*
<Mobile imgMobile={imgMobile} info={info} isImgFirst={true} />
        <Mobile imgMobile={imgMobile} info={info} isImgFirst={false} />

*/