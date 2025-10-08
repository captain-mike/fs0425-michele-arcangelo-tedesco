import React from 'react'
import { Link } from 'react-router'

const Navigation = () => {

  

  return (
    <nav>
      <ul>
        <li>
          {/* L'attributo "to" deve rispecchiare una rotta configurata correttamente (le trovi in app.jsx). 
          Se il link che vuoi inserire, invece, porta al di fuori del sito, utilizza il classico tag <a></a> con attributo href
          */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chi-siamo">Chi Siamo</Link>
        </li>
        <li>
          <Link to="/pizze">Lista pizze</Link>
        </li>
        <li>
          <Link to="/non-esiste">Non esistente</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation