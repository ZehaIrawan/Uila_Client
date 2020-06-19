import axios from 'axios';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
} from './types';

// Get PRODUGET_PRODUCTS
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/products');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Product
export const addProduct = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('http://localhost:5000/api/v1/products', formData, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`'http://localhost:5000/api/v1/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit Product
export const editProduct = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_PRODUCT,
      payload: formData,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Product

export const updateProduct = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`http://localhost:5000/api/v1/products${id}`, formData, config);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
