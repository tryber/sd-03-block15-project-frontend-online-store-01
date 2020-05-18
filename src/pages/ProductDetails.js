import React from 'react';
import Loading from '../components/Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../components/Product';
import Rating from '../components/Rating';
import AddToCart from '../components/AddToCart';
import LinkToCart from '../components/LinkToCart';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      product: {},
      amountInTheCart: 1,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { location: { state } } = this.props;
    getProductsFromCategoryAndQuery(id, state)
      .then((result) => result.results)
      .then((products) => products.filter((element) => element.id === id))
      .then((product) => this.setState({
        product: product[0],
        isLoading: false,
      }));
  }

  render() {
    const { isLoading } = this.state;
    const { location: { productItem, cart } } = this.props;
    if (isLoading) return <Loading />;

    const { title, price, thumbnail, shipping: { free_shipping } } = productItem;
    const { amountInTheCart } = this.state;

    return (
      <div>
        <LinkToCart cart={cart} />
        <Product title={title} thumbnail={thumbnail} price={price} freeShipping={free_shipping} />
        <AddToCart
          title={title}
          thumbnail={thumbnail}
          price={price}
          cart={cart}
          amountInTheCart={amountInTheCart}
        />
        <Rating id={productItem} />
      </div>
    );
  }
}

export default ProductDetails;
