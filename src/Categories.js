import React from 'react';
import { getCategories } from './services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    }
  }
  componentDidMount() {
    this.categoriasLoad();
  }

  categoriasLoad() {
    getCategories().then((array) => array.map(element =>
      element)).then(dados => this.setState({ categorias: dados }));
  }

  render() {
   const {categorias} = this.state; 
    return (
      <div>
        <ul >
          <h4>Categorias</h4>

          {categorias.map(element =>
            <li data-testid="category" key={element.id}>{element.name}</li>)}

        </ul>
      </div>
    );
  }
}

export default Categories;
