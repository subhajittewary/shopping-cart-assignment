import { initialState } from ".";

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST_SUCCESS": {
      return {
        ...state,
        productList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default productListReducer;
