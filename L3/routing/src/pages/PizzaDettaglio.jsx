import pizze from '../data/pizzas.json'
import { useParams } from 'react-router';

const getPizzaById = (id)=>{
  return pizze.find(p => {
    p.id == id
  })
}
const PizzaDettaglio = () => {

  const { id } = useParams()
  const { pizza } = getPizzaById(id)
 


  return (
    <div>
        <h1>Pizza {pizza.gusto}</h1>
        <div>Prezzo: {pizza.prezzo}€</div>
        <div>{pizza.disponibile ? 'La pizza è attualmente disponibile': 'Non disponibile'}</div>
    </div>
  )
}

export default PizzaDettaglio