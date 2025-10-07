import {useEffect} from 'react'

const Interval = () => {

    useEffect(() => {
        //didMount
        let count = 0;
        const timer = setInterval(()=> {
            count++;
            console.log('valore:', count);            
        }, 1000)

        //willUnmount
        return () => {
            clearInterval(timer)
        }
    })

  return (
    <div>Interval</div>
  )
}

export default Interval