import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json()


    setUsers(data)
  }
  
  useEffect(()=> {

    loadUsers();
    
  })

  return (
    <>
      {users.map(u => {
        return <div>{u.name}</div>
      })}
    </>
  )
}

export default App
