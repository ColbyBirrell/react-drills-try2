import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      array: ['i', 'dont', 'like', 'typing', 'strings', 'inside', 'arrays'],
      filteredStr: ''
    }
  }

  handleChange = (value) => {
    this.setState({ filteredStr: value })

  }

  render = () => {
    let newList = this.state.array.filter((element, index) => {
      return element.includes(this.state.filteredStr)
    })
      .map((element, index) => {
        return <p key={index}>{element}</p>
      })
    return (

      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)} />
        {newList}
      </div>
    );
  }
}

export default App;
