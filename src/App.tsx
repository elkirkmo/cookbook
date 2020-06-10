import React, { FunctionComponent } from 'react';
import Header from './Components/Header';
import { Switch, Route } from 'react-router-dom';
import RecipeRouter from './Components/RecipeRouter';

import Footer from './Components/Footer';
import './App.css';

import CATEGORIES from './assets/categories';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact render={() => <h1>Oh hi</h1>} />
        <Route path="/:category" component={RecipeRouter} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
