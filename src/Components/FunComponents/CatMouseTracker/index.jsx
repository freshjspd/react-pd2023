import React from 'react'
import {useState, useEffect} from 'react';

export default function CatMouseTracker(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const move = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
       window.addEventListener('mousemove', move);
       return () => { document.body.removeEventListener('mousemove', move);}
    }, []);
  return (
    <>
        <p>Mouse tracker {x} {y}</p>
        <div style={{position: 'relative', height: '100vh'}}>
        <img style={{position: 'absolute', top: y, left: x}} src="https://cdn2.iconfinder.com/data/icons/cat-power/256/cat_walk.png" />
        </div>
    </>
  )
}
