import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const { test } = this.props;
    return (
      <div>
        {
          console.log(test)
        }
      </div>
    );
  }
}

export default ShoppingCart;
