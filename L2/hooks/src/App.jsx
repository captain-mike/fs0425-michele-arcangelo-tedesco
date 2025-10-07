import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrementa(){
    setCount(count + 1)
    console.log('Count fuori da useEffect',count);
  }

  useEffect(()=>{
    //componentDidUpdate
    if(count === 0) return//Se voglio blocco la prima esecuzione 

    console.log('Count con useEffect',count);
    
  }, [count]);

  return (
    <>
      Il valore è {count}
      <button onClick={incrementa}>+</button>
    </>
  )
}

export default App
