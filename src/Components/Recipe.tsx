import React, { FunctionComponent } from 'react';
import RecipeHero from './Recipe/RecipeHero';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeInstructions from './Recipe/RecipeInstructions';
interface Props {
  title: string;
  author: string;
  ingredients: Array<Ingredient>;
  instructions: string;
}

interface Ingredient {
  type: string;
  quantity: number;
  unit: string;
}

const Recipe: FunctionComponent<Props> = ({
  title,
  author,
  ingredients,
  instructions
}) => {
  return (
    <main>
      <RecipeHero title={title} author={author} />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeInstructions text={instructions} />
    </main>
  );
};

export default Recipe;
