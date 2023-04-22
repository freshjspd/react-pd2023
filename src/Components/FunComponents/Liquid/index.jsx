import React, { useEffect, useState } from 'react';
import styles from './Liquid.module.css';

export default function Liquid(props) {
    const [shape, setShape] = useState('water');
    const {temperature} = props;

    useEffect(() => {
      if(temperature < 0) { 
          setShape('ice'); 
      }
      else if(temperature >= 100) {
          setShape('steam');
      }
      else{ 
        setShape('water');
      }
    },[]);

      return (
        <h1 className={styles[shape]}>{shape}</h1>
      );
  }
  