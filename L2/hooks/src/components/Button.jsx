import React from 'react'

const Button = () => {

    //Non sono obbligato a richiamare uno hook importandolo direttamente, ma posso anche ottenerlo tramite l'accesso a React come vedi qui sotto
    const [count, setCount] = React.useState(0)

  return (
    <div>Button</div>
  )
}

export default Button