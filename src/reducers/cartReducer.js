import { initialState } from ".";

const addItemToCart = (state, newCartItem) => {
  const itemExists = state.cartItems?.some(
    (item) => item.id === newCartItem.id
  );
  if (itemExists) {
    return state.cartItems.map((item) => {
      if (item.id === newCartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...(state.cartItems || []), { ...newCartItem, quantity: 1 }];
};

const removeFromCartItems = (state, product) => {
  const updatedCartItems = state.cartItems.map((item) => {
    if (product.id === item.id) {
      if (item.quantity > 1) {
        return {...item, quantity: item.quantity-1}
      } else {
        return null;
      }
    }
    return item;
  }).filter(Boolean);
  return updatedCartItems || [];
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCartItems = addItemToCart(state, action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: removeFromCartItems(state, action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
