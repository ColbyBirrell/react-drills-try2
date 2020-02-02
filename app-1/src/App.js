import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputLine: ''
    }
  }

  handleChange = (value) => {
    this.setState({ inputLine: value })
  }

  render() {
    return (
      <div className="App" >
        <input onChange={event => this.handleChange(event.target.value)} />
        <p> {this.state.inputLine}</p>

      </div>
    );
  }

}

export default App;
