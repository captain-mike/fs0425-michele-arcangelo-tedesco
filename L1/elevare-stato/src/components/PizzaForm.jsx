import React, { Component } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'


export default class PizzaForm extends Component {

  state = {
    gusto : '',
    prezzo: '',
    disponibile: true
  }


  componentDidUpdate(prevProps){

    if( this.props.editingPizza &&
      prevProps.editingPizza?.id !== this.props.editingPizza?.id  
    ){
        this.setState({
          gusto: this.props.editingPizza.gusto,
          prezzo: this.props.editingPizza.prezzo,
          disponibile: this.props.editingPizza.disponibile
        });
    }

      // Se abbiamo smesso di modificare
    if (!this.props.editingPizza && prevProps.editingPizza) {
      // this.resetForm()
    }
  }

  handleInputChange = (e) =>{
    // const {name, value} = e.target;
   
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const { gusto, prezzo, disponibile } = this.state
    
    // Validazione necessaria
   
    const pizzaData = {
      gusto: gusto.trim(),
      prezzo: parseInt(prezzo),
      disponibile: disponibile
    }

    if (this.props.editingPizza) {
      // Modalità modifica
      this.props.onUpdatePizza({
        ...pizzaData,
        id: this.props.editingPizza.id
      })
    } else {
      // Modalità aggiunta
      this.props.onAddPizza(pizzaData)
      this.resetForm()
    }
  }

  resetForm = () => {
    this.setState({
      gusto: '',
      prezzo: '',
      disponibile: true
    })
  }

  handleCancel = () => {
    this.props.onCancelEdit()
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
                  onClick={this.handleCancel}
                >
                  {editingPizza ? 'Modifica' : 'Crea'}
                </Button>
              </Col>
            </Row>

            {editingPizza && (
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
            )}

          </Form>
        </Card.Body>
      </Card>
    )
  }
}
