import React, { FunctionComponent } from 'react';
interface Props {
  title: string;
  author: string;
}

const RecipeHero: FunctionComponent<Props> = ({ title, author }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>From {author}</h3>
    </>
  );
};

export default RecipeHero;
