import React, { useEffect, useState } from 'react';

export default function TimerFun(props) {
  const [count, setCount] = useState(new Date(0,0,0,0,0,0,0));
  const [isRun, setIsRun] = useState(false);

  const reset = () => {
    setCount(new Date(0,0,0,0,0,0,0));
  }

  useEffect (()=>{
    if(isRun) {
        const id = setInterval(go, 1000);
        return () => {clearInterval(id);}
    }
  },[count, isRun]);

  const go = () => {
    const countNew = new Date(count.valueOf());
    countNew.setSeconds(count.getSeconds() + 1);
    setCount(countNew);
    setIsRun(true);
  }

    return (
      <>
        <p>{count.toLocaleTimeString('en-GB')}</p>
        <button onClick={()=> setIsRun(true)}>start</button>
        <button onClick={()=> setIsRun(false)}>stop</button>
        <button onClick={reset}>reset</button>
      </>
    )
}