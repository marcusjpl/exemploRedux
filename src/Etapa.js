import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form';


const FormConectado = connect(store => ({ show: store.object }))(Form)

class Etapa extends Component {

    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {
        return (
            <div>
                Nome:{this.props.show.nome}
                <br/>
                Local:{this.props.show.local}
                <br/><br/><br/>
                <FormConectado/>
            </div>
        )
    }
}
export default connect(store => ({ show: store.show }))(Etapa)

