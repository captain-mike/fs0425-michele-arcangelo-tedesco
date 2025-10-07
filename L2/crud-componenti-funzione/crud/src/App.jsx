import { useState } from 'react'
import ListaPizze from './components/ListaPizze';
import NewPizzaForm from './components/NewPizzaForm';
import './App.css'
import pizzas from './data/pizzas.json';

function App() {

  const [pizze, setPizze] = useState(pizzas);

  const addPizza = (newPizza) => {
    
    //questo assegnamento
    // const pizzaCompleta = {
    //   gusto: newPizza.gusto,
    //   prezzo: newPizza.prezzo,
    //   disponibile: newPizza.disponibile,
    //   id: crypto.randomUUID()
    // }

    //equivale a questo
    // const pizzaCompleta = {
    //   ...newPizza,
    //   id: crypto.randomUUID()
    // }

    setPizze([
      ...pizze,
      {
        ...newPizza,
        id: crypto.randomUUID
      }
    ]);
  }

  const deletePizza = id => {
    setPizze(
      pizze.filter(p => p.id != id)
    )
  }

  return (
    <>
      <NewPizzaForm onCreate={addPizza} />
      <ListaPizze onDelete={deletePizza} pizze={pizze}/>
    </>
  )
}

export default App
