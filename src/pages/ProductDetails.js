import React from 'react';
import Loading from '../components/Loading';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      product: {},
    };
  }


  componentDidMount() {
    const { item, id } = this.props.match.params;
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`)
      .then((res) => res.json())
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
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt={title} />
        <p>R$ {price}</p>
      </div>
    );
  }
}

export default ProductDetails;
