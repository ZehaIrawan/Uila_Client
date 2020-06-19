import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  filterProducts,
  getProducts,
  resetFilterProducts,
} from '../redux/actions/product';
import Navbar from './Navbar';
import Product from './Product';

const ProductList = ({
  getProducts,
  loading,
  product,
  filteredProducts,
  resetFilterProducts,
  filterProducts,
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return (
      <Fragment>
        <p>Loading ...</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar></Navbar>

      <button onClick={() => resetFilterProducts()}>All</button>
      <button onClick={() => filterProducts(1)}>Pizza</button>
      <button onClick={() => filterProducts(3)}>Burger</button>

      <div>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            img={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.products,
  loading: state.product.loading,
  filteredProducts: state.product.filteredProducts,
});

export default connect(mapStateToProps, {
  getProducts,
  filterProducts,
  resetFilterProducts,
})(ProductList);
