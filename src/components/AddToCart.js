import React, { Component } from 'react';
import '../css/shearchBar.css';

export default class AddToCart extends Component {
  addProduct(id, title, price, thumbnail, amountInTheCart) {
    const { cart } = this.props;
    cart.push({ id, title, price, thumbnail, amountInTheCart });
    console.log(this.props);
  }

  render() {
    const {id, title, price, thumbnail, amountInTheCart } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={() => this.addProduct(id, title, price, thumbnail, amountInTheCart)}
          data-testid="product-add-to-cart"
          className="botao"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
