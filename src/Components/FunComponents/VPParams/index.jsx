import React, { useEffect, useState } from 'react';

export default function VPParams(props) {
    const [x, setX] = useState(window.innerWidth);
    const [y, setY] = useState(window.innerHeight);

  const resize = () => {
    setX(window.innerWidth);
    setY(window.innerHeight);
  }

  useEffect(()=>{
    window.addEventListener('resize', resize);
  }, []);

    return (
      <>
        <h1>width {x} heigth {y}</h1>
      </>
    )
}
