import React from 'react';
import Loading from '../components/Loading';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../components/Product';
import Rating from '../components/Rating';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { item, id } } } = this.props;
    getProductsFromCategoryAndQuery(id, item)
      .then((result) => result.results)
      .then((products) => products.filter((element) => element.id === id))
      .then((product) => this.setState({
        product: product[0],
        isLoading: false,
      }));
  }

  render() {
    const { isLoading, product } = this.state;
    if (isLoading) return <Loading />;

    const { title, price, thumbnail } = product;

    return (
      <div>
        <Product title={title} thumbnail={thumbnail} price={price} />
        <Rating />
      </div>
    );
  }
}

export default ProductDetails;
