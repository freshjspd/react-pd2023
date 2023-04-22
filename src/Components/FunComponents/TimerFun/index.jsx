import React, { useState } from 'react';

export default function TimerFun(props) {
  const [count, setCount] = useState(new Date(0,0,0,0,0,0,0));
  const [isRun, setIsRun] = useState(false);
  let id = null;

  const go = () => {
    const countNew = new Date(count.valueOf());
    countNew.setSeconds(count.getSeconds() + 1);
    setCount(countNew);
    setIsRun(true);
  }

  const start = () => {
    setIsRun(true);
    if(isRun) { id = setInterval(go, 1000);}
  }

  const stop = () => {
    clearInterval(id);
    id = null;
  }

  const reset = () => {
    setCount(new Date(0,0,0,0,0,0,0));
  }

    return (
      <>
        <p>{count.toLocaleTimeString('en-GB')}</p>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </>
    )
}