import React, {useState} from 'react'

export default function Component1(props) {
  const {x, setX} = props;
  const inc = () => {setX(Number(x)+1);}
  const dec = () => {setX(Number(x)-1);}
  const mult2 = () => {setX(x*2);}
  const pow2 = () => {setX(x*x);}

  return (
    <>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={mult2}>mult2</button>
        <button onClick={pow2}>pow2</button>
    </>
  )
}
