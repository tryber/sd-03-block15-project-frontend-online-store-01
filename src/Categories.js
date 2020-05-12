import React from 'react';
import {getCategories} from './services/api';

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
        element.id)).then(dados => this.setState({categorias: dados}));
   }

  render() {
       console.log(this.state.categorias);
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
