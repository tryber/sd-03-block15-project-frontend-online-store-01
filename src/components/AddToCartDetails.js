import React, { Component } from 'react';
import '../css/shearchBar.css';

export default class AddToCartDetails extends Component {
  addProduct(title, price, thumbnail, amountInTheCart) {
    const { cart } = this.props;
    cart.push({ title, price, thumbnail, amountInTheCart });
  }

  render() {
    const { title, price, thumbnail, amountInTheCart } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={() => this.addProduct(title, price, thumbnail, amountInTheCart)}
          data-testid="product-detail-add-to-cart"
          className="botao"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
