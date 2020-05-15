import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      cart: [],
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(title, price) {
    this.state.cart.push({ title, price });
    this.setState({ empty: false });
    { console.log(this.state.cart); }
  }

  render() {
    const { title, thumbnail, price } = this.props;
    if (!this.state.empty) {
      return (
        <Redirect to={{
          pathname: '/shopping-cart',
          state: { cart: this.state.cart, empty: this.state.empty },
        }}
        />
      );
    }
    return (
      <div>
        <button type="button" onClick={() => this.addProduct(title, price)} datatest-id="product-add-to-cart">
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
