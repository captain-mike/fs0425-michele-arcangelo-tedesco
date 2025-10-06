import { useState } from 'react'
import ChildComponent from './components/ChildComponent';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={() => setCount(count+1) }>Incrementa Genitore</button>
      <ChildComponent count={count}/>
    </>
  )
}

export default App
