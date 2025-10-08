import React from 'react'
import {Link} from 'react-router'
import pizze from '../data/pizzas.json'

const ListaPizze = () => {


  return (
    <div>
      <h1>Lista pizze</h1>
      <main>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Gusto</th>
                <th>Prezzo</th>
                <th>Disponibile</th>
                <th>Dettaglio</th>
              </tr>
            </thead>
            <tbody>
              {pizze.map(p => {
                const {id, gusto, prezzo, disponibile} = p;
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{gusto}</td>
                    <td>{prezzo}€</td>
                    <td>{disponibile ? 'Si' : 'No'}</td>
                    <td> <Link to={`/pizze/${id}`}>Mostra</Link> </td>
                  </tr>
                )
              })}
            </tbody>

          </table>

      </main>
    </div>
  )
}

export default ListaPizze