import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Register = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>Register Page</div>
      <Link to="/login">Already registered? Sign in</Link>
      <Footer />
    </div>
  );
};

export default Register;
