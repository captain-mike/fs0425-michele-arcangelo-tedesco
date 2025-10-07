import React from 'react'

const Bottoni = ({aumenta, riduci}) => {
  return (
    <>
    <button onClick={aumenta}>+</button>
    <button onClick={riduci}>-</button>
    </>
  )
}

export default Bottoni