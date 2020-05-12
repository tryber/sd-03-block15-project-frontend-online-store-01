import React from 'react';
import {getCategories} from './services/api';

class Categories extends React.Component {
  render() {
    const categorias = getCategories();
    console.log(categorias.then((array) => array.map(element => console.log(element))));
    return (
      <div>
        <ul data-testid="category">
          <h4>Categorias</h4>
         {/*  {categorias.map((element) => console.log(element))} */}
          <li>
            categorias
          </li>
        </ul>
      </div>
    );
  }
}

export default Categories;
