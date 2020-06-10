import React, { FunctionComponent } from 'react';
import RecipeHero from './Recipe/RecipeHero';
import RecipeIngredients from './Recipe/RecipeIngredients';
import RecipeInstructions from './Recipe/RecipeInstructions';
import categories from '../assets/categories';
import { isRegExp } from 'util';
interface Props {
  match: {
    params: {
      category: string;
      slug: string;
    };
  };
}

interface IRecipe {
  author: string;
  id: number;
  ingredients: Ingredient[];
  instructions: string;
  slug: string;
  title: string;
}

interface Ingredient {
  type: string;
  quantity: number;
  unit: string;
}

const Recipe: FunctionComponent<Props> = ({
  match: {
    params: { category, slug },
  },
}) => {
  const cat = Object.entries(categories).filter(
    ([key]) => key === category
  )[0][1] as IRecipe[];
  const { author, id, ingredients, instructions, title } = cat
    .filter((obj: IRecipe) => obj.slug === slug)
    .shift() as IRecipe;
  return (
    <main>
      <RecipeHero title={title} author={author} />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeInstructions text={instructions} />
    </main>
  );
};

export default Recipe;
