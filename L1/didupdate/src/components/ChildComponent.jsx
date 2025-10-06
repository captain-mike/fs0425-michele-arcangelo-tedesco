import React, { Component } from 'react'

export default class ChildComponent extends Component {

    state = {
        renderCount : 0,
    }

    componentDidMount(){

        console.log('Componente "Montato"');

    }

    componentDidUpdate(prevProps, prevState){

        console.log('ChildComponent aggiornato');
        console.log(prevProps, prevState);
        
    }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({
          renderCount: this.state.renderCount+1
        }) }>Incrementa Figlio</button>
        {this.props.count}
      </div>
    )
  }
}
