import {useState}from 'react'

const NewPizzaForm = () => {

  const [form, setForm] = useState({
    gusto:'',
    prezzo:'',
    disponibile:true
  })



  return (
    <>
    <form>

      <div>
        <input type="text" value={form.gusto} name='gusto' placeholder='gusto' />
      </div>
      <div>
        <input type="text" value={form.prezzo} name='prezzo' placeholder='prezzo' />
      </div>
      <button>Crea</button>
    </form>
    </>
  )
}

export default NewPizzaForm