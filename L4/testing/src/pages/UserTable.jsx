import React, { useState, useEffect } from 'react'
import { Container, Table, Button, Form, Row, Col, Card, Alert, Badge } from 'react-bootstrap'

const UserTable = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  })

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Errore nel recupero degli utenti')
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    
    if (!newUser.name || !newUser.username || !newUser.email) {
      console.log('Nome, username e email sono obbligatori!')
      return
    }

    const userToAdd = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      ...newUser
    }

    setUsers([...users, userToAdd])
    setNewUser({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    })
    setShowAddForm(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (loading) return <div className="d-flex justify-content-center p-4"><div className="spinner-border" role="status"><span className="visually-hidden">Caricamento utenti...</span></div></div>
  if (error) return <Alert variant="danger">Errore: {error}</Alert>

  return (
    <Container className="py-4">
      <h1 className="mb-4">Gestione Utenti</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button 
          variant={showAddForm ? "secondary" : "primary"}
          onClick={() => setShowAddForm(!showAddForm)}
          data-testid="add-user-button"
        >
          {showAddForm ? 'Chiudi Form' : '+ Aggiungi Utente'}
        </Button>
        <Badge bg="info" className="fs-6" data-testid="users-count">
          Totale utenti: {users.length}
        </Badge>
      </div>

      {showAddForm && (
        <Card className="mb-4" data-testid="add-form">
          <Card.Header>
            <h5 className="mb-0">Aggiungi Nuovo Utente</h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleAddUser} data-testid="add-user-form">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Nome completo *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Nome completo"
                      value={newUser.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Username *</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={newUser.username}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={newUser.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Telefono"
                      value={newUser.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Sito web</Form.Label>
                    <Form.Control
                      type="url"
                      name="website"
                      placeholder="Sito web"
                      value={newUser.website}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <div className="d-flex gap-2">
                <Button type="submit" variant="success" data-testid="submit-button">
                  Aggiungi Utente
                </Button>
                <Button 
                  type="button" 
                  variant="outline-secondary"
                  onClick={() => setShowAddForm(false)}
                  data-testid="cancel-button"
                >
                  Annulla
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      )}

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Username</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Sito Web</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} data-testid="user-row">
                <td><Badge bg="primary">{user.id}</Badge></td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone || <span className="text-muted">N/A</span>}</td>
                <td>
                  {user.website ? (
                    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      {user.website}
                    </a>
                  ) : <span className="text-muted">N/A</span>}
                </td>
                <td>
                  <Button 
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDeleteUser(user.id)}
                    title="Elimina utente"
                    data-testid={`delete-button-${user.id}`}
                  >
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {users.length === 0 && (
        <Alert variant="info" className="text-center">
          <h5>Nessun utente presente nella tabella.</h5>
          <p>Aggiungi il primo utente utilizzando il pulsante sopra.</p>
        </Alert>
      )}
    </Container>
  )
}

export default UserTable