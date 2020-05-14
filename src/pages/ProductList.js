import React from 'react';
import CampoBusca from '../components/CampoBusca';
import Categories from '../components/Categories';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        
       }
        <Categories  categoryID={this.props.location} />
        <CampoBusca />
      </div>
    );
  }
}

export default ProductList;
