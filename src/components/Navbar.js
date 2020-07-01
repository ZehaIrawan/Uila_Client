import React, { Fragment, useEffect, useState } from 'react';
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

  const [isOpen, setIsOpen] = useState(false);

  const authLinks = (
    <Fragment>
      <Link
        className="font-semibold text-xl hover:text-primarys"
        to="/products"
      >
        <h2>Products</h2>
      </Link>

      <Link className="font-semibold text-xl hover:text-primary" to="/cart">
        <h2>Cart ({cart.length})</h2>
      </Link>

      <Link className="font-semibold text-xl hover:text-primary" to="/">
        <h2 onClick={logout}>Logout</h2>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className="font-semibold text-xl hover:text-primary" to="/register">
        <h2>Register</h2>
      </Link>
      <Link className="font-semibold text-xl hover:text-primary" to="/login">
        <h2>Login</h2>
      </Link>
    </Fragment>
  );

  return (
    <div>
      <nav className="flex bg-white items-center rounded-lg justify-between py-2 px-4">
        <Link to="/">
          <img className="h-20" src="https://i.imgur.com/OdqzUGc.png" alt="" />
        </Link>
        <button
          type="button"
          class="block text-primary focus:text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            class="h-12 w-12 fill-current hover:text-black"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </nav>
      {!loading && (
        <div className={isOpen ? 'block bg-white px-5 pb-4' : 'hidden'}>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { logout, getCart })(Navbar);
