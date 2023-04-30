import React from 'react'
import { useState } from 'react';
import styles from './DivRender.module.css';

export default function DivRender() {
  const [widthDiv , setWidthDiv] = useState(0);
  const [heightDiv, setHeightDiv] = useState(0);
  let renderStyle={width: 0, height: 0};

  const handleWidth = (e) => {
    setWidthDiv(e.target.value);
  }
  const handleHeiht = (e) => {
    setHeightDiv(e.target.value);
  }

  return (
    <>
    <input type="text" placeholder='width' value={widthDiv} onChange={handleWidth}/>
    <input type="text" placeholder='height' value={heightDiv} onChange={handleHeiht}/>
    <h2>Render box:</h2>
    <p>Width {widthDiv} height {heightDiv}</p>
    <div className={styles.box} style={{width: `${widthDiv}px`, height: `${heightDiv}px`}}></div>
    <p>----------------------------</p>
    </>
  )
}
