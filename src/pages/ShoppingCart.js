import React from 'react';
import caixaVazia from '../images/caixa-vazia.png';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
    this.state = { amountInTheCart: 0 };
  }

  redirectToTarget(cart) {
    const { history } = this.props;
    history.push({ pathname: '/checkout', state: { cart } });
  }

  increaseAmount() {
    const { location: { state: { cart } } } = this.props;

    cart.map((item) => {
      let total = 0;
      total = item.amountInTheCart += 1;
      console.log(item);
      return total;
    });
  }

  decreaseAmount() {
    const { location: { state: { cart } } } = this.props;
    console.log(cart.amountInTheCart);
  }

  cardItems() {
    const { location: { state: { cart } } } = this.props;
    return (
      <div>
        {cart.map((itemsInTheCart) => (
          <div>
            <h1 data-testid="shopping-cart-product-name">
              {itemsInTheCart.title}
            </h1>
            <h3>
              {itemsInTheCart.price}
            </h3>
            <h4 data-testid="shopping-cart-product-quantity">
              {itemsInTheCart.amountInTheCart}

            </h4>
            <button data-testid="product-increase-quantity" onClick={this.increaseAmount}>+ </button>
            <button data-testid="product-decrease-quantity" onClick={this.decreaseAmount}>- </button>
          </div>
        ))}
        <button
          type="button"
          data-testid="checkout-products"
          onClick={() => this.redirectToTarget(cart)}
        >
          Finalizar Compra
        </button>
      </div>
    );
  }

  render() {
    const { location: { state: { cart } } } = this.props;
    return (
      <div>
        {
          cart.valueOf().length <= 0
          && (
            <div>
              <img src={caixaVazia} alt="caixa-vazia" />
              <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            </div>
          )
        }
        {
          !cart.valueOf().length <= 0
          && this.cardItems()
        }
      </div>
    );
  }
}
export default ShoppingCart;
