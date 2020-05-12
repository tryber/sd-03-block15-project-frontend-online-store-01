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

function App() {
  return (
    <Router>
      <Link to="/shopping-cart" data-testid="shopping-cart-button"><img src="/images/carrinho-de-compras.png" alt="carrinho-de-compras" /></Link>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/shopping-cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
