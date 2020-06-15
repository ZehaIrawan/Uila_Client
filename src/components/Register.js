import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const { email, password, password_confirmation, registrationErrors } = formData;

  const handleSubmit = (e) => {
    axios
      .post(
        'http://localhost:5000/registrations',
        {
          user: {
            email,
            password,
            password_confirmation,
          },
        },
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          onChange={handleChange}
          value={password_confirmation}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
