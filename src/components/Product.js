import React from 'react';

const Product = ({ id, img, title, description, price, addToCart }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border">
      <div className=" pb-2/3 relative">
        <img
          className="absolute h-full w-full object-cover object-center"
          src={img}
          alt=""
        />
      </div>
      <div className="p-6">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="mt-1">{description}</p>
        <h3 className="font-semibold mt-4 text-xl">${price}</h3>
        <div className="flex justify-end">
          <button
            className="mt-2 bg-primary text-white px-2 py-1 rounded-lg focus:outline-none font-medium"
            onClick={() => addToCart(id)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
