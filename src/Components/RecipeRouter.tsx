import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

const RecipeRouter = () => (
  <Switch>
    <Route exact path="/recipes/:category" component={RecipeList} />
    <Route exact path="/recipes/:category/:slug" component={Recipe} />
  </Switch>
);

export default RecipeRouter;
