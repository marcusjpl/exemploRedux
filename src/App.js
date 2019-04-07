import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './App.css';
import Filho from './Filho';
import Etapa from './Etapa';


const FilhoConectado = connect(store => ({ text: store.text }))(Filho)

class App extends Component {
  render() {
      return (
          <Fragment>
              <h2>Exemplo com String</h2>
              <h2>{this.props.text}</h2>
              <FilhoConectado/>
               <h2>-----------------------------------------------</h2>
               <h2>Exemplo com Objeto</h2>
              <Etapa/>
          </Fragment>
      )
  }
}

export default connect(store => ({ text: store.text }))(App)
