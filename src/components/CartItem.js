import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../redux/actions/cart';

const CartItem = ({ title, quantity, product, product_id, img, price }) => {
  const changeQuantity = (e) => {
    // console.log(e);
  };

  return (
    <Fragment>
      <div>
        <h1>{title}</h1>
        <img src={img} width="200" alt="" />
        <h4>$ {price}</h4>
        <input
          type="integer"
          onChange={changeQuantity(quantity)}
        placeholder={quantity}
        ></input>
        <button>-</button>
        <button>+</button>
        <button>Delete</button>
      </div>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  product: state.product.products,
});

export default connect(mapStateToProp, { removeCart })(CartItem);
