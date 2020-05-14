import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={thumbnail} alt={title} />
        <p>
          R$
          {price}
        </p>
      </div>
    );
  }
}
