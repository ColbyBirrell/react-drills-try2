import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()


        this.state = {
            password: '',
            username: ''
        }
    }




    handlePassword = (val) => {
        this.setState({ password: val })
    }

    handleUserName = (val) => {
        this.setState({ username: val })
    }

    handleAlert = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleUserName(e.target.value)} type='text' />
                <input onChange={e => this.handlePassword(e.target.value)} type='text' />
                <button onClick={this.handleAlert}>Click Meeee!</button>
            </div>
        );
    }

}

export default Login