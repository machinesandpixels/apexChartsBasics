import React, { Component } from 'react';
import Barchart from './components/BarChart';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="container">
          <Barchart />
        </div>
      </div>
    );
  }
}

export default App;
