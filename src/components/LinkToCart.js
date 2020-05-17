import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgCart from '../images/carrinho-de-compras.png';

export default class LinkToCart extends Component {
  render() {
    const { cart } = this.props;
    const amountInTheCart = cart.valueOf().length;
    return (
      <div>
        <Link
          to={{
            pathname: '/shopping-cart',
            state: { cart, amountInTheCart },
          }}
          data-testid="shopping-cart-button"
        >
          <img src={imgCart} alt="carrinho-de-compras" />
          <span data-testid="shopping-cart-size">{amountInTheCart}</span>
        </Link>
      </div>
    );
  }
}
