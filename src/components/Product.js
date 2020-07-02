import React from 'react';

const Product = ({ id, img, title, description, price, addToCart }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border shadow-lg">
      <div className=" pb-2/3 relative">
        <img
          className="absolute h-full w-full object-cover object-center"
          src={img}
          alt=""
        />
        <h3 className="absolute bottom-0 font-semibold mt-4 text-xl text-primary bg-white rounded-lg px-1 mb-6 ml-6 shadow-lg">
          ${price}
        </h3>
        <button
          className="absolute bottom-0 right-0 shadow-lg mt-2 bg-primary text-white px-2 py-1 rounded-lg focus:outline-none font-medium mb-6 mr-6"
          onClick={() => addToCart(id)}
        >
          Order Now
        </button>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="mt-1 block">{description}</p>
      </div>
    </div>
  );
};

export default Product;
