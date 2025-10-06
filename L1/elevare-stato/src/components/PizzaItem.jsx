import React, { Component } from 'react'
import { Card, Badge, Button, ButtonGroup } from 'react-bootstrap'


export default class PizzaItem extends Component {
    render() {

        const { pizza, onEditPizza, onDeletePizza } = this.props;

        return (
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="mb-0">{pizza.gusto}</h5>

                    </div>
                    <Badge bg="primary" className="fs-6">
                        € {pizza.prezzo.toFixed(2)}
                    </Badge>
                </Card.Header>

                <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                        <Badge className="fs-6">
                            {pizza.disponibile ? 'Disponibile' : 'Non disponibile'}
                        </Badge>
                    </div>

                    <div className="mt-auto">
                        <ButtonGroup className="w-100">
                            <Button
                                variant="outline-primary"
                                size="sm"
                                title="Modifica pizza"
                                onClick={()=> onEditPizza(pizza)}
                            >
                                Modifica
                            </Button>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                title="Elimina pizza"
                            >
                                Elimina
                            </Button>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
