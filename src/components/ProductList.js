import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import {
  filterProducts,
  getProductCategories,
  getProducts,
  resetFilterProducts,
} from '../redux/actions/product';
import Footer from './Footer';
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
  isAuthenticated,
}) => {
  useEffect(() => {
    getProducts();
    getProductCategories();
  }, [getProducts, getProductCategories]);

  useEffect(() => {
    resetFilterProducts();
  }, []);

  const [isActive, setIsActive] = useState(0);

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
      <div className="px-8 py-5">
        <div className="relative text-center">
          <img
            className="rounded w-full h-64 object-center"
            src="https://i.imgur.com/xvo5vKR.png"
            alt="header"
          />
          <div className="absolute top-0 text-white text-left pl-12 pt-16 text-3xl">
            <h1> Find Healthy and </h1>
            <h1> favourite foods</h1>
            <h1> Near you</h1>
          </div>
        </div>

        <button
          className={
            isActive === 0
              ? 'border-black  text-white rounded-lg m-4 py-1 px-4 bg-custom-sort bg-primary focus:outline-none shadow-lg'
              : 'border-gray-900 border-1 rounded-lg m-4 py-1 px-4 bg-custom-sort bg-white focus:outline-none shadow-lg'
          }
          onClick={() => {
            resetFilterProducts();
            setIsActive(0);
          }}
        >
          All ({product.length})
        </button>

        {categories.map((category) => {
          let count = 0;

          product.forEach((p) => {
            if (p.category_id === category.id) count += 1;
          });

          return (
            <button
              className={
                isActive === category.id
                  ? 'border-black  text-white rounded-lg m-4 py-1 px-4 bg-custom-sort bg-primary focus:outline-none shadow-lg'
                  : 'border-gray-900 border-1 rounded-lg m-4 py-1 px-4 bg-custom-sort bg-white focus:outline-none shadow-lg'
              }
              key={category.id}
              onClick={() => {
                filterProducts(category.id);
                setIsActive(category.id);
              }}
            >
              {category.title} ({count})
            </button>
          );
        })}

        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              img={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              addToCart={addToCart}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.products,
  loading: state.product.loading,
  filteredProducts: state.product.filteredProducts,
  categories: state.product.categories,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  getProducts,
  filterProducts,
  resetFilterProducts,
  getProductCategories,
  addToCart,
})(ProductList);
