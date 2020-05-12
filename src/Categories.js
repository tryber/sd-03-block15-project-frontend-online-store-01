import React from 'react';
import {getCategories} from './services/api';

class Categories extends React.Component {
  render() {
    const categorias = getCategories().then((array) => array.map(element => console.log(element)));
    console.log( categorias);
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
