import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      array: ['soda', 'pizza', 'rice', 'bread', 'are', 'things', 'i', 'dont', 'eat'],

    }

  }




  render = () => {
    let newArr = this.state.array.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })


    return (
      <div className="App">
        {newArr}
      </div>
    );
  }
}

export default App;
