import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';
import Navbar from './Navbar';
import Product from './Product';

const ProductList = ({ getProducts, loading, product }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const pizza = product.filter((e) => e.category_id === 1);
  const burger = product.filter((e) => e.category_id === 3);

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
      <h1>Pizza</h1>
      <div>
        {pizza.map((product) => (
          <Product
            key={product.id}
            img={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <h1>Burger</h1>
      <div>
        {burger.map((product) => (
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
  // loading: state.products.loading,
});

export default connect(mapStateToProps, {
  getProducts,
})(ProductList);
