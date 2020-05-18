import React, { Component } from 'react';
import '../css/shearchBar.css';

export default class AddToCart extends Component {
  addProduct(title, price, thumbnail) {
    const { cart } = this.props;
    cart.push({ title, price, thumbnail });
  }

  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={() => this.addProduct(title, price, thumbnail)}
          data-testid="product-add-to-cart"
          className="botao"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
