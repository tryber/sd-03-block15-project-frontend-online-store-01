import { Link } from 'react-router-dom';
import React from 'react';
import { getCategories } from '../services/api';
import '../css/sideBar.css';


class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
      item: '',
      products: [],
      valueShow: true,
      categoryID: this.props.categoryID,
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
      <div className="l-navbar">
        <nav className="nav">
          <h4>Categorias</h4>
          {categorias.map((element) => (
            <li
              className="nav__list"
              key={element.id}
            >
              <Link data-testid="category" to={{ pathname: '/', category: element.id }} onClick={() => this.searchLink(element.id)}>
                <span>{element.name}</span>
              </Link>

            </li>
          ))}
        </nav>
      </div>
    );
  }
}

export default Categories;
