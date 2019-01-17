import React, { Component } from 'react';
import RecipeHero from './Recipe/RecipeHero';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeInstructions from './Recipe/RecipeInstructions';

class Recipe extends Component {
    render () {
        return (
        <main>
            <RecipeHero />
            <RecipeIngredients />
            <RecipeInstructions />
        </main>
        )
    };
}

export default Recipe;