import React from 'react'

const Counter = ({numero, classi}) => {

  return (
    <div className={classi}>{numero}</div>
  )
}

export default Counter