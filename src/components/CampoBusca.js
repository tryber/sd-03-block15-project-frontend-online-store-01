import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CampoBusca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      products: [],
      valueShow: true,
    };
    this.textChange = this.textChange.bind(this);
    this.shearchButton = this.shearchButton.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  shearchButton() {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${this.state.item}`)
      .then((resp) => resp.json())
      .then((categories) => this.setState({
        products: categories.results,
        valueShow: false,
      }));
  }

  textInput() {
    const { products, valueShow } = this.state;
    if (valueShow) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <div data-testid="product">
        {products.map((el) => (
          <div key={el.title}>
            <p>{el.title}</p>
            <img src={el.thumbnail} alt={el.title} />
            <p>{el.price}</p>
            <Link to={`/product/${this.state.item}/${el.id}`} data-testid="product-detail-link">Ver detalhes</Link>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <input data-testid="query-input" type="text" onChange={this.textChange} />
        <button
          type="button"
          data-testid="query-button"
          onClick={() => this.shearchButton()}
        >
          clique
        </button>
        {this.textInput()}
      </div>
    );
  }
}
