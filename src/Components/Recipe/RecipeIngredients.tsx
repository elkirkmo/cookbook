import React, { Component } from 'react';
import IngredientSingle from './IngredientSingle';

interface Props {
  ingredients: Array<Ingredient>;
}

interface Ingredient {
  type: string;
  quantity: number;
  unit: string;
}

const RecipeIngredients: React.FunctionComponent<Props> = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map(({ type, unit, quantity }) => (
        <IngredientSingle key={type} q={quantity} unit={unit} item={type} />
      ))}
    </ul>
  );
};

export default RecipeIngredients;
