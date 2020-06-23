import React from 'react';

const Product = ({ id,img, title, description, price,addToCart }) => {
  return (
    <div>
      <img src={img} alt="" width="100" />
      <h3>{title}</h3>
      <p>{description}</p>
      <h3>{price}</h3>
      <button onClick={() => addToCart(id)}>Order Now</button>
    </div>
  );
};

export default Product;
