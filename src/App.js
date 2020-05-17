import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import Checkoutpage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route name="productList" exact path="/" component={ProductList} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/checkout" component={Checkoutpage} />
      </Switch>
    </Router>
  );
}

export default App;
