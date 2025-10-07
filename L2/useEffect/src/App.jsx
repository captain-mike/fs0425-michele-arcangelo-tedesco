import { useState } from 'react'
import './App.css'
import Interval from './components/Interval';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
      // const visibility = !isVisible;
      //È possibile passare al setter una funzione di callback e eseguire delle operazioni per la preparazione del dato prima del nuovo assegnamento.
      //Dovresti valutare tu in base ai casi, quale modalità di lavoro preferisci 
      setIsVisible( prevState => {
        return !prevState
      });
  }

  return (
    <>
      
      {isVisible && <Interval/>}

      <button onClick={toggleVisibility}>
        {isVisible ? 'Nascondi' : 'Mostra'}
      </button>

    </>
  )
}

export default App
