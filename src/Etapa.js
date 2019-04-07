import React, { Component } from 'react'
import appActions from './appActions'
import { connect } from 'react-redux'
import Form from './Form';


const FormConectado = connect(store => ({ nome: store.text }))(Form)

class Etapa extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: {
                nome: '',
                local: '',
            }
        }
    }

    render() {
        return (
            <div>
                Nome:{this.props.nome}
                <br/>
                Local:{this.state.show.local}
                <br/><br/><br/>
                <FormConectado/>
            </div>
        )
    }
}
export default connect(store => ({ nome: store.nome }))(Etapa)

