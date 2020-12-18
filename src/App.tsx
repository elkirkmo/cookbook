import React, { FunctionComponent } from 'react';
import Header from './Components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import RecipeRouter from './Routes/RecipeRouter';

import Footer from './Components/Footer';
import './App.css';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category" component={RecipeRouter} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
