import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import {
  filterProducts,
  getProductCategories,
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
  getProductCategories,
  categories,
  addToCart,
}) => {
  useEffect(() => {
    getProducts();
    getProductCategories();
  }, [getProducts, getProductCategories]);

  useEffect(() => {
    resetFilterProducts();
  }, []);

  if (loading) {
    return (
      <Fragment>
        <p>Loading ...</p>
      </Fragment>
    );
  }

  return (
    <div className="px-8 py-12">
      <Navbar></Navbar>

      <img
        className="rounded w-10/12 object-center"
        src="https://i.imgur.com/xvo5vKR.png"
        alt="header"
      />

      <button onClick={() => resetFilterProducts()}>
        All ({product.length})
      </button>

      {categories.map((category) => {
        let count = 0;

        product.forEach((p) => {
          if (p.category_id === category.id) count += 1;
        });

        return (
          <button key={category.id} onClick={() => filterProducts(category.id)}>
            {category.title} ({count})
          </button>
        );
      })}

      <div>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.products,
  loading: state.product.loading,
  filteredProducts: state.product.filteredProducts,
  categories: state.product.categories,
});

export default connect(mapStateToProps, {
  getProducts,
  filterProducts,
  resetFilterProducts,
  getProductCategories,
  addToCart,
})(ProductList);
