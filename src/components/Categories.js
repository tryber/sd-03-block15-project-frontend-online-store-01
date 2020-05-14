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
      categoryID : this.props.categoryID.key,
    };
    this.searchLink = this.searchLink.bind(this);
  }

  componentDidMount() {
    this.categoriasLoad();
    console.log(this.props.categoryID.key)
 
  }

  categoriasLoad() {
    getCategories().then((array) => array
      .map((element) => element)).then((dados) => this.setState({ categorias: dados }));
  }

  searchLink() {
     //const { item } = this.state;
     const {key} = this.props.categoryID
     console.log(key);
    getProductsFromCategoryAndQuery(key)
    .then((categories) => this.setState({
      products: categories.results,
      valueShow: false,
    }));
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
              <Link to={
    { 
        pathname: '/' ,
        category: element
    }
} onClick={this.searchLink}>{element.name}</Link>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
