import React, { Component } from 'react';
import '../css/productDetails.css';
import FreeeShipping from './FreeeShipping';

export default class Product extends Component {
  render() {
    const { title, thumbnail, price, freeShipping } = this.props;
    return (
      <div className="container">
        <h4 className="title" data-testid="product-detail-name">{title}</h4>
        <h4 className="title">
          R$
          {price}
        </h4>
        {freeShipping ? <FreeeShipping /> : null}
        <img src={thumbnail} alt={title} className="imagem" />
      </div>
    );
  }
}
