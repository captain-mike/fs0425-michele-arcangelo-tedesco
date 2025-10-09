import React from 'react'
import { Card, Row, Col, Container, Badge } from 'react-bootstrap'

const Pizzas = () => {

  const pizzas = [
    {
      id:1,
      gusto:'Margherita',
      prezzo: 5
    },
    {
      id:2,
      gusto:'Diavola',
      prezzo: 1
    },
    {
      id:3,
      gusto:'4 Stagioni',
      prezzo: 7
    }
  ]

  return (
    <Container className="py-4">
      <h1 className="mb-4">Le Nostre Pizze</h1>
      <Row className="g-4">
        {pizzas.map(pizza => (
          <Col key={pizza.id} sm={12} md={6} lg={4}>
            <Card className="h-100 text-center">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">{pizza.gusto}</Card.Title>
                <Badge bg="secondary" className="mb-3 align-self-center">
                  #{pizza.id}
                </Badge>
                <Card.Text className="mt-auto">
                  <span className="h4 text-success">{pizza.prezzo}€</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Pizzas