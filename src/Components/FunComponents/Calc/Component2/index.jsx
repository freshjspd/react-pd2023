import React, {useState} from 'react'

export default function Component2(props) {
  const {x, setX} = props;
  const log = () => {setX(Math.log(x));}
  const log10 = () => {setX(Math.log10(x));}
  const sin = () => {setX(Math.sin(x));}

  return (
    <>
        <button onClick={log}>log</button>
        <button onClick={log10}>log2</button>
        <button onClick={sin}>sin</button>
    </>
  )
}