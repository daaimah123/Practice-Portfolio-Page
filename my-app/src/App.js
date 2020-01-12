import React, { Component } from 'react';
import './App.css';
import Dolls from '../src/Components/Dolls'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App"> {/* background img is in className=App */}
          <Dolls />
        </header>
    </div>
    )
  }
}

export default App;
