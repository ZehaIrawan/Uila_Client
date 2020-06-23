import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  clearCart,
  decreaseCart,
  getCart,
  increaseCart,
} from '../redux/actions/cart';
import CartItem from './CartItem';
import Navbar from './Navbar';

const Cart = ({
  getCart,
  loading,
  cart,
  increaseCart,
  decreaseCart,
  clearCart,
}) => {
  useEffect(() => {
    getCart();
  }, [getCart,cart]);

  if (loading) {
    return (
      <Fragment>
        <Navbar />
        Loading...
      </Fragment>
    );
  }


  let total = 0;
  cart.cart.map((item) => {
    return (total += parseFloat(item.product.price) * parseInt(item.quantity));
  });
  if (cart.cart.length === 0)
    return (
      <Fragment>
        <Navbar />
        <h3 style={{ textAlign: 'center' }}> Your cart is empty</h3>
        <button
          onClick={() => {
            clearCart(cart.cart);
          }}
          className="total theme-button"
        >
          Clear Cart
        </button>
      </Fragment>
    );

  return (
    <Fragment>
      <Navbar />
      {cart.cart.map((cart) => (
        <CartItem
          key={cart.id}
          id={cart._id}
          title={cart.product.title}
          img={cart.product.image}
          price={cart.product.price}
          product_id={cart.product_id}
          quantity={cart.quantity}
          increaseCart={increaseCart}
          decreaseCart={decreaseCart}
        />
      ))}
      {/* <button
        onClick={() => {
          clearCart(cart.cart);
        }}
        className="total add-to-cart"
      >
        Clear Cart
      </button> */}
      <h3 className="total">Total: ${total}</h3>
      <button>Checkout</button>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  cart: state.cart,
  loading: state.cart.loading,
});

export default connect(mapStateToProp, {
  getCart,
  increaseCart,
  decreaseCart,
  clearCart,
})(Cart);
