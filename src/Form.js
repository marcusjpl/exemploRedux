import React, { Component } from 'react'
import appActions from './appActions'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { show: {} };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
      }
    
      handleSubmit(event) {
        event.preventDefault();

        let show = this.state.show;
        show.nome = this.state.nome;
        show.local = this.state.local;
        this.setState({show: show});
        this.setShow();
    }

    setShow() {
        this.props.dispatch(appActions.setShow(this.state.show));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
                    </label>

                    <label>
                        Local: <input type="text" name="local" value={this.state.local} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

