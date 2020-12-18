import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Recipe from '../Components/Recipe';
import RecipeList from '../Components/RecipeList';

const RecipeRouter = () => (
  <Switch>
    <Route exact path="/:category" component={RecipeList} />
    <Route exact path="/:category/recipes/:slug" component={Recipe} />
  </Switch>
);

export default RecipeRouter;
