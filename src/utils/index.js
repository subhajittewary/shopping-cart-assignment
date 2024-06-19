import { addToCart, removeFromCart } from "../actions";

const handleAddToCart = (product, cartItems, dispatch) => {
  const disableBtn = shouldDisableCartBtn(product, cartItems);
  if (!disableBtn) addToCart(dispatch, product);
  else alert("Product is out of stock.");
};

const handleRemoveFromCart = (product, cartItems, dispatch) => {
  removeFromCart(dispatch, product);
};

const shouldDisableCartBtn = (product, cartItems = []) => {
  let disable = false;
  if (cartItems.length > 0) {
    cartItems?.forEach((cartItem) => {
      if (cartItem.id === product.id && cartItem.quantity >= product.stock) {
        disable = true;
      }
    });
  }
  return disable;
};

export { handleAddToCart, handleRemoveFromCart };
