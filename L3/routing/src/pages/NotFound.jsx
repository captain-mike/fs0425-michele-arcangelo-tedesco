import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router'

const NotFound = ({hasHeader}) => {

  const navigate = useNavigate()//hook Che permette la navigazione programmatica (Redirect)
  const [time, setTime] = useState(5);

  useEffect(()=>{

    hasHeader(false)

    const timer = setInterval(()=>{
      
      setTime(time-1)

      //Quando il tempo raggiunge lo zero 
      if(time === 0){
        navigate('/')//Porto l'utente alla home. 
      }

    },1000)


    return () => {
      //L'intervallo continua a funzionare anche se il componente è stato smontato, quindi è necessario bloccarlo quando il componente si smonta 
      //Scatenare un re Direct provoca di fatto lo smontaggio del componente. 
        clearInterval(timer)
    }

  })


  return (<>
    <h1>NotFound</h1>
    <p>Qualcosa è andato storto...</p>
    <p>La pagina che stavi cercando non esiste</p>
    <Link to="/">Torna alla home</Link> altrimenti verrai reindirizzato automaticamente tra {time} secondi
  </>
  )
}

export default NotFound