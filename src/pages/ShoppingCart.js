import React from 'react';
import caixaVazia from '../images/caixa-vazia.png';

class ShoppingCart extends React.Component {
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
          && (
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
                </div>
              ))}
            </div>
          )
        }
      </div>
    );
  }
}
export default ShoppingCart;
