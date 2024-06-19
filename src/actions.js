const fetchProductList = (dispatch, mockData) => {
  dispatch({
    type: "FETCH_PRODUCT_LIST_SUCCESS",
    payload: mockData,
  });
};

const addToCart = (dispatch, cartItems) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: cartItems
  });
};

const removeFromCart = (dispatch, cartItems) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: cartItems
  });
};

export  {fetchProductList, addToCart, removeFromCart};
