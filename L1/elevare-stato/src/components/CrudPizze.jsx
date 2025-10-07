import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import PizzaForm from './PizzaForm'
import PizzaList from './PizzaList'
import initialPizzas from '../data/pizzas.json';

export default class CrudPizze extends Component {

    state = {
        pizzas : initialPizzas, //L'array di pizza che dobbiamo gestire
        editingPizza: null//La pizza che vogliamo modificare, se non presente va impostato a null
    }

    addPizza = (pizza) => {

        const newPizza = {
            ...pizza,
            id: crypto.randomUUID()//Genero un ID randomico, siccome non abbiamo un vero back end 
        }

        this.setState({pizzas : [...this.state.pizzas, newPizza] })

    }

    updatePizza = (updatedPizza) => {
        this.setState({
            pizzas: this.state.pizzas.map(pizza => {
                if(pizza.id == updatedPizza.id){
                    return updatedPizza;
                }else{
                    return pizza;
                }
            })
        })
    }

    deletePizza = (id) => {
        this.setState({
            pizzas: this.state.pizzas.filter(pizza => pizza.id === id)
        })
    }

    //Metodo che serve a selezionare una pizza per la fase di modifica. 
    editPizza = (pizza) => {
        this.setState({
            editingPizza: pizza
        })
    }

    //metodo che serve a rimuovere dalla fase di modifica una pizza selezionata 
    cancelEdit = () => {
        this.setState({
            editingPizza: null
        })
    }


  render() {
    return (
        <Row>
          <Col lg={4} className="mb-4">
            <PizzaForm 
            editingPizza={this.state.editingPizza}
            onUpdatePizza={this.updatePizza}
            onCancelEdit={this.cancelEdit}
            onAddPizza={this.addPizza}
            />
          </Col>
          <Col lg={8}>
            <PizzaList 
            pizzas={this.state.pizzas}
            onEditPizza={this.editPizza}
            onDeletePizza={this.deletePizza}
            />
          </Col>
        </Row>
    )
  }
}
