import React, { Component } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'


export default class PizzaForm extends Component {

  state = {
    gusto : '',
    prezzo: '',
    disponibile: true
  }


  componentDidUpdate(prevProps){

    if( 
      prevProps.editingPizza?.id !== this.props.editingPizza?.id  
    ){
        this.setState({
          gusto: this.props.editingPizza.gusto,
          prezzo: this.props.editingPizza.prezzo,
          disponibile: this.props.editingPizza.disponibile
        });
    }

  }

  handleInputChange = (e) =>{
    // const {name, value} = e.target;
   
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {

  }

  render() {

    const {editingPizza} = this.props;
    const {gusto, prezzo} = this.state;
    
    return (
      <Card>
        <Card.Header>
          <h4 className="mb-0">
            {editingPizza ? 'Modifica' : 'Crea'} pizza
          </h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Gusto Pizza</Form.Label>
              <Form.Control
                type="text"
                name="gusto"
                value={gusto}
                onChange={this.handleInputChange}
                placeholder="Es: Margherita"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prezzo (€)</Form.Label>
              <Form.Control
                type="number"
                name="prezzo"
                value={prezzo}
                onChange={this.handleInputChange}
                placeholder="Es: 8.50"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="disponibile"
                // value={disponibile}
                // onChange={this.handleInputChange}
                label="Pizza disponibile"
              />
            </Form.Group>

            <Row>
              <Col>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 mb-2"
                >
                  {editingPizza ? 'Modifica' : 'Crea'}
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-100"
                  onClick={this.handleCancel}
                >
                  Annulla
                </Button>
              </Col>
            </Row>

          </Form>
        </Card.Body>
      </Card>
    )
  }
}
