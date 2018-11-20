import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
  this.selectNewRecipe = this.selectNewRecipe.bind(this);
  this.state = {
   
    }
  };
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
