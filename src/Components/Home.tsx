import { linkSync } from 'fs';
import React from 'react';
import { Link } from 'react-router-dom';

import captialize from '../utils/captalize';

import CATEGORIES from '../assets/categories';
const Home = () => {
  const Links = () =>
    Object.keys(CATEGORIES).map((x) => (
      <>
        <li>
          <Link to={`/${x}`}>{`${captialize(x)}`}</Link>
        </li>
      </>
    ));
  return (
    <>
      <h1>Categories</h1>
      <ul>{Links()}</ul>
    </>
  );
};

export default Home;
