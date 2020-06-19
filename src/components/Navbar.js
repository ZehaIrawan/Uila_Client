import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link to="/products">
        <h2>Products</h2>
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
    <nav>
      <h1>
        <Link to="/">
          <h1>Uila! Client </h1>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
