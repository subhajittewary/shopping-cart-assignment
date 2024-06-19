import { combineReducers } from "redux";
import productListReducer from "./productListReducer.js";
import addToCartReducer from "./cartReducer.js";

export const initialState = {
  productList: [],
  cartItems: [],
};

const rootReducer = combineReducers({
  productList: productListReducer,
  addToCart: addToCartReducer,
});

export default rootReducer;
