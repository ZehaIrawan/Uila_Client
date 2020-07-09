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
import SK_PRODUCTLIST from './SK_PRODUCTLIST';

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

  // loading = true;

  useEffect(() => {
    resetFilterProducts();
  }, []);

  const [isActive, setIsActive] = useState(0);

  if (loading) {
    return (
      <Fragment>
        <Navbar />
        <SK_PRODUCTLIST></SK_PRODUCTLIST>
        <Footer />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="px-8 sm:px-24 md:px-16 py-5">
        <div className="flex justify-end my-6">
          <input
            type="text"
            name=""
            placeholder="Search by name"
            className="bg-gray-200 pl-2 py-1 rounded-lg focus:outline-none block w-2/3 sm:w-64"
          />
        </div>

        <button
          className={
            isActive === 0
              ? 'border-black  text-white rounded-lg m-4 py-1 px-4 bg-custom-sort bg-primary focus:outline-none shadow-lg'
              : 'border-gray-900 border-1 rounded-lg m-4 py-1 px-4 bg-custom-sort bg-gray-200 focus:outline-none shadow-lg'
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
                  : 'border-gray-900 border-1 rounded-lg m-4 py-1 px-4 bg-gray-200 focus:outline-none shadow-lg'
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
      </div>
      <Footer></Footer>
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
