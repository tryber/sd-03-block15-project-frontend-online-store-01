import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import imgCart from './images/carrinho-de-compras.png';

function App() {
  return (   
    <Router>
      <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
      >
        <img src={imgCart} alt="carrinho-de-compras" />
       
      </Link>
      <Switch>
        <Route name="productList" exact path="/" component={ProductList} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
