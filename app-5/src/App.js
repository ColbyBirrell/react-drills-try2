import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image url={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPd3x8WlEqB-MMT02WlP30TKvYKk3D5Q-V4K9veycDhKzaJ_-&s`} />
      </div>
    );
  }
}

export default App;
