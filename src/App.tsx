import React, { Component } from 'react';
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Recipe />
        <Footer />
      </div>
    );
  }
}

export default App;
