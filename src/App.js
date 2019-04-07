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
              <h1>{this.props.text}</h1>
              <FilhoConectado/>
              <Etapa/>
          </Fragment>
      )
  }
}

export default connect(store => ({ text: store.text }))(App)
