import React from 'react';

const Product = ({ id, img, title, description, price, addToCart }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border">
      <img src={img} alt="" />
      <div className="p-6">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p>{description}</p>
        <h3>{price}</h3>
        <button onClick={() => addToCart(id)}>Order Now</button>
      </div>
    </div>
  );
};

export default Product;
