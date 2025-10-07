import React from 'react'

const ListaPizze = ({onDelete, pizze}) => {
  return (
    <>

      <table>

          <thead>
            <tr>
              <th>#</th>
              <th>gusto</th>
              <th>prezzo</th>
              <th>disponibile</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>

            {pizze.map(pizza => {

             return ( 
                  <tr key={pizza.id}>
                    <td>{pizza.id}</td>
                    <td>{pizza.gusto}</td>
                    <td>{pizza.prezzo}</td>
                    <td>{pizza.disponibile}</td>
                    <td>
                      <button onClick={()=>onDelete(pizza.id)}>Elimina</button>
                    </td>
                  </tr>
                )
            })}
          </tbody>

      </table>

    </>
  )
}

export default ListaPizze