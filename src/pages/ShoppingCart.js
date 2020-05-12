import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      cart: [],
    };
  }

  render() {
    const { empty } = this.state;
    return (
      <div>
        {
          empty &&
          <div>
            <img src="../images/caixa-vazia.png" alt="caixa-vazia" />
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        }
      </div>
    );
  }
}

export default ShoppingCart;
