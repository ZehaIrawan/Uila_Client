import React, { Fragment, useEffect } from 'react';
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
          className="rounded w-10/12 object-center"
          src="https://i.imgur.com/xvo5vKR.png"
          alt="header"
        />

        <button
          className="border rounded-lg m-4 p-1 bg-custom-sort bg-primary text-white  focus:outline-none  py-1 px-4 "
          onClick={() => resetFilterProducts()}
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
              className="border rounded-lg m-4 py-1 px-4 bg-custom-sort bg-primary text-white focus:outline-none"
              key={category.id}
              onClick={() => filterProducts(category.id)}
            >
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
