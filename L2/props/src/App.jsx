import { useState } from 'react'
import './App.css'
import Bottoni from './components/Bottoni'
import Counter from './components/Counter'

function App() {
  
  const [count, setCount] = useState(0);

  const incrementa = () => {
    setCount(count+1)
  }

  const decrementa = () => {
    setCount(count-1)
  }

  return (
    <>
      <Counter 
      numero={count}
      classi="alert alert-Warning"
      />
      <Bottoni 
      aumenta={incrementa} 
      riduci={decrementa}
      />
    </>
  )
}

export default App
