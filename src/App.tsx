import React, { Component } from 'react';
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import Footer from './Components/Footer';
import './App.css';

import data from './assets/Breakfast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {data.map(x => (
          <Recipe {...x} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
