import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import categories from '../assets/categories';

interface Props {
  match: {
    params: {
      category: string;
    };
  };
}

interface IRecipe {
  author: string;
  id: number;
  ingredients: object;
  instructions: string;
  slug: string;
  title: string;
}

const RecipeList: FunctionComponent<Props> = ({
  match: {
    params: { category },
  },
}) => {
  console.log(categories);
  console.log('here');
  const recipes: IRecipe[] = Object.entries(categories)
    .filter(([key]) => key === category)
    .map(([, value]) => value)[0] as IRecipe[];
  return (
    <>
      <h1>{category}</h1>
      <ul>
        {recipes.map(({ slug, title }) => (
          <li key={slug}>
            <Link to={`/${category}/recipes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipeList;
