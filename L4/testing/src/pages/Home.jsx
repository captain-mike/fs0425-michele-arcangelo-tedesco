import React, { useState } from 'react'

const Home = () => {

  const [isVisible, setIsVisible] = useState(true)

  return (<>
    <h1>Benvenuto nel nostro sito</h1>

    <button data-testid="toggle" onClick={()=>setIsVisible(!isVisible)}>Mostra/nascondi</button>

    {isVisible && <div data-testid="fade">Contenuto da mostrare/nascondere</div>}
  </>
  )
}

export default Home