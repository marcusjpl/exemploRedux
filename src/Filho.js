import React, { Component, Fragment } from 'react'
import appActions from './appActions'

export default class Filho extends Component {

    setText() {
        this.props.dispatch(appActions.setText('Aquele texto'))
    }

    render() {
        return (
            <Fragment>
                <button onClick={() => this.setText()}>Mudar texto</button>
            </Fragment>
        )
    }
}

