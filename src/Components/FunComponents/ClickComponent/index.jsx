import React, {useState, useEffect} from 'react'

export default function ClickComponent() {
  const [count, setCount] = useState(0);

  const handleCount = () => { setCount(count + 1); }

  useEffect( () => {
    document.body.addEventListener('click', handleCount);
    return () => { document.body.removeEventListener('click', handleCount);}
  }, [count] );
  
  return (
    <p>Click: {count}</p>
  )
}
