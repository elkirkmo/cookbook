import React, { Component } from 'react';
import RecipeHero from './Recipe/RecipeHero';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeInstructions from './Recipe/RecipeInstructions';
import data from '../assets/cookbook.json';
class Recipe extends Component {
    render () {
        return (
        <main>
            <RecipeHero title={data.recipe.title} author={data.recipe.author}/>
            <RecipeIngredients ingredients={data.recipe.ingredients} />
            <RecipeInstructions text={data.recipe.instructions}/>
        </main>
        )
    };
}

export default Recipe;