import {useState}from 'react'

const NewPizzaForm = ({onCreate}) => {

  const [form, setForm] = useState({
    gusto:'',
    prezzo:'',
    disponibile:true
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dati del form:', form)

    //aggiorno lo stato del genitore
    onCreate(form)

    // Reset del form dopo l'invio
    setForm({
      gusto: '',
      prezzo: '',
      disponibile: true
    })
  }



  return (
    <>
    <form onSubmit={handleSubmit}>

      <div>
        <input type="text" value={form.gusto} name='gusto' placeholder='gusto' onChange={handleChange} />
      </div>
      <div>
        <input type="text" value={form.prezzo} name='prezzo' placeholder='prezzo' onChange={handleChange} />
      </div>
      <button type="submit">Crea</button>
    </form>
    </>
  )
}

export default NewPizzaForm