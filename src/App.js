import React, { Component } from 'react';
import './App.css';

// components
import Header from './Components/Header.js';
import TextForm from './Components/TextForm.js';

class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
      	<TextForm/>
      </div>
    );
  }
}

export default App;