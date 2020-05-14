import React from 'react';
import CampoBusca from '../components/CampoBusca';
import Categories from '../components/Categories';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <CampoBusca />
      </div>
    );
  }
}

export default ProductList;
