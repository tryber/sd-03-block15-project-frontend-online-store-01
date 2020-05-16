import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import AddToCart from '../components/AddToCart';
import imgCart from '../images/carrinho-de-compras.png';

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

  async shearchButton(categoryid) {
    const { item } = this.state;
    await getProductsFromCategoryAndQuery(categoryid, item)
      .then((categories) => this.setState({ products: categories.results, valueShow: false }));
  }

  textInput() {
    const { products, valueShow, item, cart, amountInTheCart } = this.state;
    if (valueShow) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return (
      <div>
        {products.map((el) => (
          <div key={el.title}>
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
                state: item,
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

  linkToCard() {
    const { cart, amountInTheCart } = this.state;
    return (
      <div>
        <Link
          to={{
            pathname: '/shopping-cart',
            state: { cart, amountInTheCart },
          }}
          data-testid="shopping-cart-button"
        >
          <img src={imgCart} alt="carrinho-de-compras" />
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.linkToCard()}
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
