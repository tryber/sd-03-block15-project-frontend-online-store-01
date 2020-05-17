import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import AddToCart from '../components/AddToCart';
import LinkToCart from '../components/LinkToCart';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amountInTheCart: 1,
      cart: [],
      item: '',
      products: [],
      valueShow: true,
    };

    this.textChange = this.textChange.bind(this);
    this.shearchButton = this.shearchButton.bind(this);
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  shearchButton(categoryid) {
    const { item } = this.state;
    console.log(item);
    getProductsFromCategoryAndQuery(categoryid, item)
      .then((categories) => this.setState({ products: categories.results, valueShow: false }));
  }

  textInput() {
    const { valueShow } = this.state;
    if (valueShow) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (this.productMap());
  }

  productMap() {
    const { products, cart, amountInTheCart } = this.state;
    return (
      <div>
        {products.map((el) => (
          <div key={el.id}>
            <div data-testid="product">{el.title}</div>
            <img src={el.thumbnail} alt={el.title} />
            <div>{el.price}</div>
            <AddToCart
              title={el.title}
              thumbnail={el.thumbnail}
              price={el.price}
              cart={cart}
              amountInTheCart={amountInTheCart}
            />
            <Link
              to={{
                pathname: `/product/${el.id}`,
                productItem: el,
                cart,
              }}
              data-testid="product-detail-link"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <LinkToCart cart={cart} />
        <Categories event={this.shearchButton} />
        <input data-testid="query-input" type="text" onChange={this.textChange} />
        <button
          type="button"
          data-testid="query-button"
          onClick={() => this.shearchButton()}
        >
          clique
        </button>
        {this.textInput()}
      </div>
    );
  }
}

export default ProductList;
