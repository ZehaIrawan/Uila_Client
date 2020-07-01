import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/auth';
import { getCart } from '../redux/actions/cart';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  cart,
  getCart,
}) => {
  useEffect(() => {
    getCart();
  }, [getCart]);

  const authLinks = (
    <Fragment>
      <Link to="/products">
        <h2>Products</h2>
      </Link>

      <Link to="/cart">
        <h2>Cart ({cart.length})</h2>
      </Link>

      <Link to="/">
        <h2 onClick={logout}>Logout</h2>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/register">
        <h2>Register</h2>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
    </Fragment>
  );

  return (
    <nav className="flex bg-white mb-12 rounded-lg">
      <Link to="/">
        <img src="https://i.imgur.com/OdqzUGc.png" alt="" />
      </Link>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { logout, getCart })(Navbar);
