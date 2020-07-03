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
    <div>
      <Navbar></Navbar>
      <div className="px-8 py-5">
        <img
          className="rounded w-full object-center"
          src="https://i.imgur.com/xvo5vKR.png"
          alt="header"
        />

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

          console.log(category.id);

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
            />
          ))}
        </div>
        <Footer></Footer>
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
