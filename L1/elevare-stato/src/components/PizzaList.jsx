import React, { Component } from 'react'
import { Card, Row, Col, Alert } from 'react-bootstrap'
import PizzaItem from './PizzaItem'

export default class PizzaList extends Component {
  
  
  render() {
  
    const { pizzas, onEditPizza, onDeletePizza } = this.props; 

    return (
      <Card>
        <Card.Header>
          <h4 className="mb-0">Lista Pizze </h4>
        </Card.Header>
        <Card.Body>
          <Row>
            {pizzas.map(pizza => (
              <Col key={pizza.id} md={6} lg={4} className="mb-3">
                <PizzaItem 
                pizza={pizza}
                onEditPizza={onEditPizza}
                onDeletePizza={onDeletePizza}
                />
              </Col>
            ))}

          </Row>
        </Card.Body>
      </Card>
    )
  }
}
