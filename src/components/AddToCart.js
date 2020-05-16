import React, { Component } from 'react';

export default class AddToCart extends Component {
  addProduct(title, price, thumbnail, amountInTheCart) {
    const { cart } = this.props;
    cart.push({ title, price, thumbnail, amountInTheCart });
  }

  render() {
    const { title, price, thumbnail, amountInTheCart } = this.props;
    return (
      <div>
        <button type="button" onClick={() => this.addProduct(title, price, thumbnail, amountInTheCart)} data-testid="product-add-to-cart">
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
