import React from 'react';
import Api from './services/api';

class Categories extends React.Component {

  render() {
    return (
      <div>
        <ul data-testid="category">
          <h4>Categorias</h4>
          <li>
            categorias
          </li>
        </ul>
      </div>
    );
  }
}

export default Categories;
