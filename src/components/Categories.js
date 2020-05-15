import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { Link } from 'react-router-dom'; 
import CampoBusca from './CampoBusca';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [], 
      item: '',
      products: [],
      valueShow: true,
      categoryID : this.props.categoryID,
    };
    this.searchLink = this.searchLink.bind(this);
    
  }

  async componentDidMount() {
    await this.categoriasLoad();
  }

  categoriasLoad() {
    getCategories().then((array) => array
      .map((element) => element)).then((dados) => this.setState({ categorias: dados }));
  }

  searchLink(categoriaID) {
   this.props.event(categoriaID);
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <ul>
          <h4>Categorias</h4>
          {categorias.map((element) => (
            <li
              data-testid="category"
              key={element.id}
            > 
              <Link to={{pathname: '/', category: element.id}} onClick={() => this.searchLink(element.id)}>{element.name} = {element.id}</Link>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
