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
    const { location } = this.props;
    const { productItem } = location;
    if (isLoading) return <Loading />;

    const { title, price, thumbnail } = productItem;

    return (
      <div>
        <Product title={title} thumbnail={thumbnail} price={price} />
        <Rating id={productItem} />
      </div>
    );
  }
}

export default ProductDetails;
