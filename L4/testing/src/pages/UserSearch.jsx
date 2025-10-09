import { useState, useEffect } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

const UserSearch = () => {

  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Errore nel recupero degli utenti')
        }
        const data = await response.json()
        setUsers(data)
        setFilteredUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredUsers(users)
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredUsers(filtered)
    }
  }, [searchTerm, users])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }


  if (loading) return <div className="loading">Caricamento utenti...</div>
  if (error) return <div className="error">Errore: {error}</div>

  return (
    <Container className="py-4">
      <h1 className="mb-4">Cerca Utenti</h1>
      
      <div className="search-box mb-4">
        <input
          type="text"
          placeholder="Cerca per nome o username..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
          data-testid="search-input"
        />
      </div>

      <div className="results-info mb-4" data-testid="results-info">
        {searchTerm && (
          <p className="text-muted">
            {filteredUsers.length === 0 
              ? `Nessun utente trovato per "${searchTerm}"` 
              : `${filteredUsers.length} utente/i trovato/i per "${searchTerm}"`
            }
          </p>
        )}
      </div>

      <Row className="g-4">
        {filteredUsers.map(user => (
          <Col key={user.id} sm={12} md={6} lg={4}>
            <Card className="h-100" data-testid="user-card">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <strong>Username:</strong> {user.username}<br />
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Telefono:</strong> {user.phone}<br />
                  <strong>Sito web:</strong> {user.website}
                </Card.Text>
                
                <div className="mb-3">
                  <strong>Indirizzo:</strong>
                  <div className="text-muted">
                    {user.address.street}, {user.address.suite}<br />
                    {user.address.city} - {user.address.zipcode}
                  </div>
                </div>
                
                <div>
                  <strong>Azienda:</strong>
                  <div className="text-muted">
                    {user.company.name}<br />
                    <em>{user.company.catchPhrase}</em>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default UserSearch