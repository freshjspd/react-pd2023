import React, {useState} from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

export default function Calc() {
  const [x, setX] = useState(0); 
  
  const handleX = (event) => {
    setX(event.target.value)
  }

  return (
    <>
        <input type="text" value={x} onChange={handleX} />
        <p>Component1</p>
        <Component1 x={x} setX={setX}/>
        <p>Component2</p>
        <Component2 x={x} setX={setX}/>
    </>
  )
}
