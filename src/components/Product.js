import React from 'react';

const Product = ({ img, title, description, price }) => {
  return (
    <div>
      <img src={img} alt="" width="100" />
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{price}</h3>
      <button>Order Now</button>
    </div>
  );
};

export default Product;
