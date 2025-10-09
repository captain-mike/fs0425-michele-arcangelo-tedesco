import {useState, useEffect} from 'react'
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap'

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  const fetchUsers = async () => {
    try{

      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if(!response.ok) throw new Error('Errore nel recupero degli utenti')

      const data = await response.json()
      setUsers(data)

    }catch(err){
      setError(true)
      console.error(err)
    }finally{
      setLoading(false)
    }

  }

  useEffect(()=>{
    fetchUsers()
  },[])

  if (loading) return <div className="loading">Caricamento utenti...</div>
  if (error) return <div className="error">Errore: {error}</div>

  return (
    <Container className="mt-4">
      <h1>Tutti gli Utenti</h1>
      
      {!loading && !error && (
        <Row>
          {users.map(user => (
            <Col key={user.id} md={6} lg={4} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {user.email}<br/>
                    <strong>Telefono:</strong> {user.phone}<br/>
                    <strong>Sito web:</strong> {user.website}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default Users